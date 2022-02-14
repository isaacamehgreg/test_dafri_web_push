import React, { useState } from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Input, TextArea } from '../../../../Base/FormControls';
import {
  requiredValue,
  validateEmail,
  validateImageFile,
  validatePercentRate,
  validatePhone,
} from '../../../../../services/validators';
import { dataUserSelector } from '../../../../../redux/auth/selectors';
import types from '../../../../../redux/types';
import EmptyImage from '../../../../Base/EmptyImage';
import SuccessUploadImg from '../EditPaymentAgent/SuccessUploadImg';
import UploadBtn from '../EditPaymentAgent/UploadBtn';
import InputError from '../../../../Base/InputError';

const PaymentForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector(dataUserSelector);

  const isPaymentAgent = userData?.payment_agent;
  const isBlockedAgent = userData?.payment_agent_blocked;

  const initValue = {
    name: '',
    surname: '',
    business_name: '',
    address: '',
    country: '',
    phone: '',
    email: '',
    commission_rate: '',
    min_deposit_withdrawal: '',
    money_source: '',
    currency: '',
    description: '',
    payment_methods: '',
  };

  // File field logic
  const [file, setFile] = useState({
    isSuccess: false,
    standartFile: null,
    base64: null,
  });

  const [image, setImage] = useState(null);
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

  // All validation
  const validateCustomFields = () => {
    validateFile();
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch({
      type: types.REGISTER_PAYMENT_AGENT_START,
      payload: {
        ...values,
        commission_rate: `${values.commission_rate}`,
        min_deposit_withdrawal: `${values.min_deposit_withdrawal}`,
        phone: `+${values.phone}`,
        photo: file.base64,
      },
      resetForm,
    });
  };

  return (
    <section className="info-section">
      <div className="custom-container">
        <p className="section-title section-title--center">
          {L.translate('Pages.Users.PaymentAgent.PaymentForm.item1')}
        </p>

        <div className="section-content">
          <div className="main-form-box">
            {!isPaymentAgent && !isBlockedAgent ? (
              <Formik initialValues={initValue} onSubmit={handleSubmit}>
                {({ handleChange, setFieldValue, values, ...formik }) => {
                  return (
                    <Form className="main-form">
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
                            <InputError
                              errorText={fileError}
                              position="center"
                            />
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="field">
                            <Field
                              type="text"
                              name="name"
                              className="input input--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item2',
                              )}
                              component={Input}
                              validate={requiredValue}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="field">
                            <Field
                              type="text"
                              name="surname"
                              className="input input--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item3',
                              )}
                              component={Input}
                              validate={requiredValue}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <div className="field">
                            <div className="field-wrap">
                              <Field
                                type="text"
                                name="business_name"
                                className="input input--type2"
                                placeholder={L.translate(
                                  'Pages.Users.PaymentAgent.PaymentForm.item4',
                                )}
                                component={Input}
                                validate={requiredValue}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="field">
                            <Field
                              type="text"
                              name="address"
                              className="input input--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item5',
                              )}
                              component={Input}
                              validate={requiredValue}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="field">
                            <Field
                              type="text"
                              name="country"
                              className="input input--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item6',
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
                              type="number"
                              name="phone"
                              className="input input--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item7',
                              )}
                              component={Input}
                              validate={validatePhone}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="field">
                            <Field
                              type="text"
                              name="email"
                              className="input  input--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item8',
                              )}
                              component={Input}
                              validate={validateEmail}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="field">
                            <Field
                              type="number"
                              name="commission_rate"
                              className="input input--type2 "
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item9',
                              )}
                              component={Input}
                              validate={value =>
                                validatePercentRate(value, 1, 100)
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="field">
                            <Field
                              type="number"
                              name="min_deposit_withdrawal"
                              className="input input--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item10',
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
                              type="text"
                              name="money_source"
                              className="input input--type2 "
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item11',
                              )}
                              component={Input}
                              validate={requiredValue}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="field">
                            <Field
                              type="text"
                              name="currency"
                              className="input input--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item12',
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
                              name="description"
                              className="area-field area-field--type2"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item13',
                              )}
                              component={TextArea}
                              validate={requiredValue}
                              rows="5"
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="field">
                            <Field
                              className="area-field area-field--type2"
                              name="payment_methods"
                              placeholder={L.translate(
                                'Pages.Users.PaymentAgent.PaymentForm.item14',
                              )}
                              component={TextArea}
                              validate={requiredValue}
                              rows="5"
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-flex investment-form__submit">
                        <button
                          className="button button--big"
                          onClick={validateCustomFields}
                          type="submit"
                        >
                          {L.translate(
                            'Pages.Users.PaymentAgent.PaymentForm.item15',
                          )}
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            ) : (
              <div className="form-status" style={{ marginTop: '0' }}>
                <p className="table-status table-status--active">
                  <span className="d-flex table-status__icon">
                    <svg
                      className="fill"
                      width="13"
                      height="10"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9986 1.07798C12.155 1.23426 12.2428 1.4462 12.2428 1.66718C12.2428 1.88815 12.155 2.10009 11.9986 2.25637L5.32601 8.92332C5.16959 9.07955 4.95748 9.16732 4.73631 9.16732C4.51515 9.16732 4.30303 9.07955 4.14662 8.92332L0.810307 5.58984C0.658373 5.43267 0.574303 5.22216 0.576203 5.00365C0.578104 4.78514 0.665823 4.57612 0.820468 4.42161C0.975113 4.2671 1.18431 4.17945 1.403 4.17755C1.6217 4.17566 1.83238 4.25965 1.98969 4.41146L4.73631 7.15574L10.8192 1.07798C10.9757 0.921751 11.1878 0.833984 11.4089 0.833984C11.6301 0.833984 11.8422 0.921751 11.9986 1.07798Z"
                        fill="#3DD598"
                      />
                    </svg>
                  </span>
                  {L.translate('Pages.Users.PaymentAgent.PaymentForm.item16')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;
