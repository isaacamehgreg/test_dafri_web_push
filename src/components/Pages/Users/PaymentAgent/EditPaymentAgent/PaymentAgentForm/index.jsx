import React, { useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import SuccessUploadImg from '../SuccessUploadImg';
import UploadBtn from '../UploadBtn';
import InputError from '../../../../../Base/InputError';
import FormSelect from '../FormSelect';
import { Input, TextArea } from '../../../../../Base/FormControls';
import EmptyImage from '../../../../../Base/EmptyImage';
import {
  requiredValue,
  validateEmail,
  validateImageFile,
  validatePhone,
} from '../../../../../../services/validators';
import types from '../../../../../../redux/types';
import notification from '../../../../../../services/notification';

const PaymentAgentForm = ({ data, countries }) => {
  const dispatch = useDispatch();

  const initValue = {
    address: data?.address || '',
    email: data?.email || '',
    min_deposit_withdrawal: data?.min_deposit_withdrawal || '',
    payment_methods: data?.payment_methods || '',
    name: data?.name || '',
    surname: data?.surname || '',
    phone: data?.phone || '',
    description: data?.description || '',
  };

  // File field logic
  const [file, setFile] = useState({
    isSuccess: false,
    standartFile: data?.photo_path || null,
    base64: data?.photo_path || null,
  });

  const [image, setImage] = useState(data?.photo_path);

  const [fileError, setFileError] = useState(null);

  const validateFile = () => {
    const error = validateImageFile(file.standartFile);
    setFileError(error);
  };

  const setBlob = e => {
    const targetFile = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(targetFile);

    fileReader.onloadend = function onLoadEnd() {
      const base64Code = fileReader.result;

      setImage(base64Code);

      setFile({
        standartFile: targetFile,
        base64: base64Code,
        isSuccess: true,
      });
    };

    setFileError(validateImageFile(targetFile));
  };

  // Commision field logic
  const [commision, setCommision] = useState({
    value: `${data?.commission_rate}%` || '',
    label: `${data?.commission_rate}%` || '',
  });
  const [commisionError, setCommisionError] = useState(false);

  const commisionData = Array(100)
    .fill('')
    .map((_, i) => ({ label: `${i + 1}%`, value: `${i + 1}%` }));

  const validateCommision = () => setCommisionError(!commision.value);

  const handleCommision = option => {
    setCommision(option);
    setCommisionError(!option?.value);
  };

  // Countries field logic
  const [country, setCountry] = useState({
    value: data?.country || '',
    label: data?.country || '',
  });

  const countriesData = countries?.map(item => ({
    label: item.country,
    value: item.country,
  }));

  const [countryError, setCountryError] = useState(false);

  const validateCountry = () => setCountryError(!country.value);

  const handleCountry = option => {
    setCountry(option);
    setCountryError(!option?.value);
  };

  // All validation
  const validateCustomFields = () => {
    validateFile();
    validateCommision();
    validateCountry();
  };

  const validateChanges = obj => {
    if (data) {
      const {
        address,
        email,
        min_deposit_withdrawal,
        payment_methods,
        name,
        surname,
        phone,
        description,
        commission_rate,
        country,
        photo_path,
      } = data;

      return (
        Object.entries({
          address,
          email,
          min_deposit_withdrawal,
          payment_methods,
          name,
          surname,
          phone,
          description,
          commission_rate,
          country,
          photo: photo_path,
        })
          .sort()
          .toString() === Object.entries(obj).sort().toString()
      );
    }
  };

  // Submit validation
  const handleSubmit = values => {
    if (!fileError && !commisionError && !countryError) {
      const payload = {
        ...values,
        commission_rate: +commision.value.replace(/\D+/g, ''),
        country: country.value,
        photo:
          data?.photo_path && !file.base64 ? data?.photo_path : file.base64,
      };

      const hasChanges = validateChanges(payload);

      if (!hasChanges) {
        dispatch({
          type: types.EDIT_PAYMENT_AGENT_START,
          payload,
        });
      } else {
        notification({
          type: 'info',
          timeOut: 4000,
          message: L.translate(
            'Pages.Users.PaymentAgent.EditPaymentAgent.item1',
          ),
        });
      }
    }
  };

  return (
    <section className="inner-section inner-section--agent">
      <div className="custom-container">
        <div className="profile-container profile-container--full">
          <p className="section-title section-title--center">Edit Profile</p>

          <Formik
            enableReinitialize
            initialValues={initValue}
            onSubmit={handleSubmit}
          >
            {({ resetForm, values, ...formik }) => (
              <Form className="main-form-box main-form-box--agent">
                <div className="main-form">
                  <div className="profile-photo">
                    <div className="d-flex profile-photo__item">
                      {image ? (
                        <img src={image} alt="" />
                      ) : (
                        <EmptyImage width="100%" height="100%" />
                      )}
                    </div>

                    {file.isSuccess && <SuccessUploadImg />}

                    <div className="profile-photo__upload">
                      <UploadBtn setBlob={setBlob} />

                      {fileError && (
                        <InputError errorText={fileError} position="center" />
                      )}
                    </div>
                  </div>

                  <div className="main-form__group">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="field">
                          <Field
                            type="text"
                            name="name"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Users.PaymentAgent.EditPaymentAgent.item3',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="field">
                          <Field
                            name="surname"
                            type="text"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Users.PaymentAgent.EditPaymentAgent.item4',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="field">
                          <FormSelect
                            data={countriesData}
                            error={countryError}
                            onChange={handleCountry}
                            placeholder={L.translate(
                              'Pages.Users.PaymentAgent.EditPaymentAgent.item7',
                            )}
                            defaultValue={country}
                          />

                          {countryError && (
                            <InputError
                              errorText={L.translate(
                                'Pages.Users.PaymentAgent.EditPaymentAgent.item5',
                              )}
                            />
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="field">
                          <FormSelect
                            data={commisionData}
                            error={commisionError}
                            onChange={handleCommision}
                            placeholder={L.translate(
                              'Pages.Users.PaymentAgent.EditPaymentAgent.item8',
                            )}
                            defaultValue={commision}
                          />

                          {commisionError && (
                            <InputError
                              errorText={L.translate(
                                'Pages.Users.PaymentAgent.EditPaymentAgent.item6',
                              )}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="field">
                          <Field
                            name="min_deposit_withdrawal"
                            type="number"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Users.PaymentAgent.EditPaymentAgent.item9',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="field">
                          <Field
                            name="address"
                            type="text"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Users.PaymentAgent.EditPaymentAgent.item10',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="field">
                          <Field
                            name="payment_methods"
                            type="text"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Users.PaymentAgent.EditPaymentAgent.item11',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>

                        <div className="field">
                          <Field
                            name="email"
                            type="text"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Users.PaymentAgent.EditPaymentAgent.item12',
                            )}
                            component={Input}
                            validate={validateEmail}
                          />
                        </div>
                        <div className="field">
                          <div className="field-wrap">
                            <Field
                              name="phone"
                              type="text"
                              className="input input--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.EditPaymentAgent.item13',
                              )}
                              component={Input}
                              validate={validatePhone}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="field">
                          <div className="field-wrap">
                            <Field
                              name="description"
                              className="area-field area-field--type2 area-field--bigger"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.EditPaymentAgent.item14',
                              )}
                              component={TextArea}
                              validate={requiredValue}
                              rows="7"
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex main-form__submit main-form__submit--more-mt">
                    <button
                      className="button button--big button--uppercase"
                      type="submit"
                      onClick={validateCustomFields}
                    >
                      {L.translate(
                        'Pages.Users.PaymentAgent.EditPaymentAgent.item15',
                      )}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default PaymentAgentForm;
