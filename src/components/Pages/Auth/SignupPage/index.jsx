import React, { useCallback, useEffect, useState, useRef } from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Auth from '../../../HOC/Auth';
import { Input } from '../../../Base/FormControls';
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../../../../services/validators';
import routes from '../../../../routes';
import types from '../../../../redux/types';
import { closeModal, openModal } from '../../../Base/Modal';
import Captcha from '../../../Base/Modals/Captcha';
import notification from '../../../../services/notification';

const SignupPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const initialValues = {
    email: '',
    password: '',
    password_confirm: '',
    referral: '',
    agree: false,
  };
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);

  const handleCaptcha = (values, resetForm) => {
    const data = {
      email: values.email,
      password: values.password,
      referral: values.referral,
      captcha: '00000000',
    };

    closeModal();
    dispatch({ type: types.SIGNUP_START, payload: { data, history } });
  };

  const openCaptcha = (values, resetForm) => {
    openModal(() => (
      <Captcha
        handleCaptcha={value => handleCaptcha(value, values, resetForm)}
      />
    ));
  };

  const onSubmit = (values, { resetForm }) => {
    if (!values.agree) {
      notification({
        type: 'error',
        message:
          'Please, read and agree to the terms of service User Agreement and Privacy Policy',
      });
      return;
    }
    handleCaptcha(values, resetForm);
  };

  return (
    <Auth>
      <Formik initialValues={{ ...initialValues }} onSubmit={onSubmit}>
        {({ setFieldValue, ...formik }) => {
          const passwordValue = formik.values.password;
          return (
            <Form className="cred-container__right">
              <div className="cred-form cred-form--main">
                <div className="cred-form__header">
                  <p className="form-title">
                    {L.translate('Pages.Auth.SignupPage.item1')}
                  </p>
                </div>
                <div className="cred-form__body">
                  <div className="cred-field ">
                    <Field
                      type="text"
                      placeholder={L.translate('Pages.Auth.SignupPage.item2')}
                      className="input input--icon-right"
                      name="email"
                      validate={validateEmail}
                      component={Input}
                      isCheckMark
                    />
                  </div>
                  <div className="cred-field cred-field--bigger-mt">
                    <Field
                      type={!isShowPass ? 'password' : 'input'}
                      className="input input--show-pass"
                      placeholder={L.translate('Pages.Auth.SignupPage.item3')}
                      name="password"
                      validate={validatePassword}
                      component={Input}
                      isShowPass={isShowPass}
                      setIsShowPass={setIsShowPass}
                    />
                  </div>
                  <div className="cred-field cred-field--bigger-mt">
                    <Field
                      type={!isShowConfirmPass ? 'password' : 'input'}
                      className="input input--show-pass"
                      placeholder={L.translate('Pages.Auth.SignupPage.item4')}
                      name="password_confirm"
                      component={Input}
                      validate={value =>
                        validateConfirmPassword(value, passwordValue)
                      }
                      isShowConfirmPass={isShowConfirmPass}
                      setIsShowConfirmPass={setIsShowConfirmPass}
                    />
                  </div>
                  <div className="cred-field cred-field--bigger-mt">
                    <Field
                      type="input"
                      className="input input--show-pass"
                      placeholder={L.translate('Pages.Auth.SignupPage.item5')}
                      name="referral"
                      component={Input}
                    />
                  </div>
                </div>
                <div className="cred-panel">
                  <div className="cred-check">
                    <div className="check-wrap">
                      <Field
                        type="checkbox"
                        className="new-check"
                        id="terms"
                        name="agree"
                      />
                      <label htmlFor="terms">
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
                          {L.translate('Pages.Auth.SignupPage.item6')}{' '}
                          <Link to={routes.Static.PrivacyAndTerms.path}>
                            {L.translate('Pages.Auth.SignupPage.item7')}
                          </Link>
                          .
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-submit form-submit--big-mt ">
                  <button className="button button--full" type="submit">
                    {L.translate('Pages.Auth.SignupPage.item8')}
                  </button>
                </div>
                <div className="cred-panel">
                  <p className="cred-extra">
                    {L.translate('Pages.Auth.SignupPage.item9')}{' '}
                    <Link to={routes.Auth.Login.path}>
                      {L.translate('Pages.Auth.SignupPage.item10')}
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Auth>
  );
};

export default SignupPage;
