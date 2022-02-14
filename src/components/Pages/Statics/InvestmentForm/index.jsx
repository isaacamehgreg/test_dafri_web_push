import React, { useState } from 'react';
import moment from 'moment';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../../../Base/Modal';
import { Input } from '../../../Base/FormControls';
import Captcha from '../../../Base/Modals/Captcha';
import Picker from '../../../Base/Picker';
import notification from '../../../../services/notification';
import routes from '../../../../routes';
import types from '../../../../redux/types';
import {
  phoneRegex,
  requiredValue,
  validatePhone,
} from '../../../../services/validators';
import dateIcon from '../../../../styles/img/date-icon.svg';

const InvestmentForm = () => {
  const dispatch = useDispatch();
  const [allowTerms, setAllowTerms] = useState(false);

  const [dateValue, setDateValue] = useState(null);
  const [dateError, setDateError] = useState(false);

  const initValue = {
    name: '',
    surname: '',
    country: '',
    address: '',
    occupation: '',
    phone: '',
    budget: '',
    alternative_phone: '',
    payment_type: '',
    next_kin_surname: '',
    next_kin_phone: '',
    next_kin_relationship: '',
    fund_source: '',
    next_kin_name: '',
  };

  const handleCaptcha = (value, formValues, resetForm) => {
    closeModal();

    dispatch({
      type: types.INVESTMENT_FORM_SEND_START,
      payload: {
        ...formValues,
        phone: `+${formValues.phone}`,
        alternative_phone: formValues.alternative_phone
          ? `+${formValues.alternative_phone}`
          : '',
        next_kin_phone: `+${formValues.next_kin_phone}`,
        budget: `${formValues.budget}`,
        birthday: dateValue?.formatted,
        captcha: value,
      },
    });

    resetForm();
    setDateValue(null);
  };

  const openCaptcha = (values, resetForm) => {
    if (!allowTerms) {
      notification({
        type: 'info',
        message:
          'Please, accept Digital Bank of Africa Terms & Conditions and DafriXchange Privacy policy',
      });
    } else {
      openModal(() => (
        <Captcha
          handleCaptcha={value => handleCaptcha(value, values, resetForm)}
        />
      ));
    }
  };

  const handleSelectDate = date => {
    setDateValue({
      formatted: moment(date).format('yyyy-MM-DD'),
      native: date,
    });
    setDateError(!date);
  };

  const validateDate = () => setDateError(!dateValue);

  const handleSubmit = (values, { resetForm }) => {
    validateDate();

    if (dateValue) openCaptcha(values, resetForm);
  };

  return (
    <section className="info-section">
      <div className="custom-container">
        <p className="section-title section-title--center">
          {L.translate('Pages.Statics.InvestmentForm.item21')}
        </p>

        <div className="section-content">
          <div className="investment-box">
            <Formik onSubmit={handleSubmit} initialValues={initValue}>
              {({ resetForm, setFieldValue, ...formik }) => (
                <Form className="investment-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="field">
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="name"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Statics.InvestmentForm.item1',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="field">
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="surname"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Statics.InvestmentForm.item2',
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
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="country"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Statics.InvestmentForm.item3',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="field">
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="address"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Statics.InvestmentForm.item4',
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
                        <div className="field-wrap">
                          <Picker
                            name="birthday"
                            className={`input input--type2 date input--icon-right ${
                              dateError ? 'error' : ''
                            }`}
                            placeholderText={L.translate(
                              'Pages.Statics.InvestmentForm.item5',
                            )}
                            onChange={handleSelectDate}
                            showPopperArrow={false}
                            dateFormat="yyyy-MM-dd"
                            selected={dateValue?.native}
                            dropdownMode="select"
                            showYearDropdown
                            showMonthDropdown
                          />

                          <span className="field-icon">
                            <img src={dateIcon} className="stroke" alt="" />
                          </span>
                        </div>

                        {dateError && (
                          <p className="error-text">
                            <span className="error-text__icon">
                              <svg
                                className="fill"
                                width="20"
                                height="16"
                                viewBox="0 0 20 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 5.74986V8.5M10 11.4999H10.009M3.79425 15H16.2057C17.5852 15 18.4469 13.5414 17.7572 12.375L11.5514 1.87479C10.8617 0.708402 9.13829 0.708402 8.44856 1.87479L2.24282 12.375C1.55309 13.5414 2.4148 15 3.79425 15Z"
                                  stroke="#FD5353"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span>Field is required</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="field">
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="occupation"
                            className="input input--type2"
                            placeholder={L.translate(
                              'Pages.Statics.InvestmentForm.item6',
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
                        <div className="field-wrap">
                          <Field
                            type="number"
                            name="phone"
                            className="input input--type2 "
                            placeholder={L.translate(
                              'Pages.Statics.InvestmentForm.item7',
                            )}
                            component={Input}
                            pattern={phoneRegex}
                            validate={validatePhone}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="field">
                        <Field
                          type="number"
                          name="budget"
                          className="input input--icon-right input--type2"
                          placeholder={L.translate(
                            'Pages.Statics.InvestmentForm.item8',
                          )}
                          textCurrency2="USD"
                          component={Input}
                          validate={requiredValue}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="field">
                        <div className="field-wrap">
                          <Field
                            type="number"
                            name="alternative_phone"
                            className="input input--type2 "
                            placeholder={L.translate(
                              'Pages.Statics.InvestmentForm.item9',
                            )}
                            component={Input}
                            pattern={phoneRegex}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="field">
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="payment_type"
                            className="input input--type2"
                            component={Input}
                            validate={requiredValue}
                            placeholder={L.translate(
                              'Pages.Statics.InvestmentForm.item10',
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="field">
                        <div className="field-wrap">
                          <Field
                            type="text"
                            name="fund_source"
                            className="input input--type2 "
                            placeholder={L.translate(
                              'Pages.Statics.InvestmentForm.item11',
                            )}
                            component={Input}
                            validate={requiredValue}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <p className="item-title">
                      {L.translate('Pages.Statics.InvestmentForm.item22')}
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="field">
                          <div className="field-wrap">
                            <Field
                              type="text"
                              name="next_kin_name"
                              className="input input--type2 "
                              placeholder={L.translate(
                                'Pages.Statics.InvestmentForm.item12',
                              )}
                              component={Input}
                              validate={requiredValue}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="field">
                          <div className="field-wrap">
                            <Field
                              type="text"
                              name="next_kin_surname"
                              className="input input--type2 "
                              placeholder={L.translate(
                                'Pages.Statics.InvestmentForm.item13',
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
                          <div className="field-wrap">
                            <Field
                              type="number"
                              name="next_kin_phone"
                              className="input input--type2 "
                              placeholder={L.translate(
                                'Pages.Statics.InvestmentForm.item14',
                              )}
                              component={Input}
                              pattern={phoneRegex}
                              validate={validatePhone}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="field">
                          <div className="field-wrap">
                            <Field
                              type="text"
                              name="next_kin_relationship"
                              className="input input--type2 "
                              placeholder={L.translate(
                                'Pages.Statics.InvestmentForm.item15',
                              )}
                              component={Input}
                              validate={requiredValue}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex investment-form__check">
                    <div className="check-wrap">
                      <input
                        type="checkbox"
                        className="new-check new-check--type3 "
                        id="agree"
                        name="Policy"
                        checked={allowTerms}
                        onChange={() => setAllowTerms(!allowTerms)}
                      />

                      <label htmlFor="agree">
                        <span className="check-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 26"
                            width="26"
                            height="26"
                            fill="#fff"
                          >
                            <path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z" />
                          </svg>
                        </span>

                        <span>
                          {L.translate('Pages.Statics.InvestmentForm.item16')}{' '}
                          <Link to={routes.Static.PrivacyAndTerms.path}>
                            {L.translate('Pages.Statics.InvestmentForm.item17')}
                          </Link>{' '}
                          {L.translate('Pages.Statics.InvestmentForm.item18')}{' '}
                          <Link to={routes.Static.PrivacyAndTerms.path}>
                            {L.translate('Pages.Statics.InvestmentForm.item19')}{' '}
                          </Link>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="d-flex investment-form__submit">
                    <button
                      className="button button--big"
                      type="submit"
                      onClick={validateDate}
                    >
                      {L.translate('Pages.Statics.InvestmentForm.item20')}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentForm;
