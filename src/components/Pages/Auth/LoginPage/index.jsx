import React, { useCallback, useEffect, useState, useRef } from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import routes from '../../../../routes';
import types from '../../../../redux/types';
import Auth from '../../../HOC/Auth';
import { Input } from '../../../Base/FormControls';
import { closeModal, openModal } from '../../../Base/Modal';
import Captcha from '../../../Base/Modals/Captcha';
import {
  validateEmail,
  validatePassword,
} from '../../../../services/validators';
import { getLS } from '../../../../services/localStorage';

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const initialValues = {
    email: '',
    password: '',
    totp: '',
  };

  const [isShowPass, setIsShowPass] = useState(false);
  const [currentTab, setCurrentTab] = useState('emailTab');
  const [phoneData, setPhoneData] = useState('');

  const search =
    location.search && location.search.length ? location.search.slice(1) : null;

  const handleCurrentTab = (e, resetForm) => {
    setCurrentTab(e.target.name);
    resetForm();
  };

  const handleCaptcha = (value, values, resetForm) => {
    const data = {
      ...values,
      captcha: value,
      remember: 0,
      device_hash: getLS('device_hash'),
    };
    closeModal();
    dispatch({ type: types.LOGIN_START, payload: { data, history } });
  };

  const openCaptcha = (values, resetForm) => {
    openModal(() => (
      <Captcha
        handleCaptcha={value => handleCaptcha(value, values, resetForm)}
      />
    ));
  };

  const handleChangePhone = p => {
    setPhoneData(`+${p}`);
  };

  const onSubmit = (values, { resetForm }) => {
    const newValues = { ...values, phone: phoneData };
    openCaptcha(newValues, resetForm);
  };

  useEffect(() => {
    if (search) {
      dispatch({ type: types.CONFIRM_EMAIL_START, payload: { token: search } });
    }
  }, []);

  return (
    <Auth>
      <Formik initialValues={{ ...initialValues }} onSubmit={onSubmit}>
        {({ setFieldValue, resetForm, ...formik }) => (
          <Form className="cred-container__right">
            {currentTab === 'emailTab' && (
              <div className="cred-form cred-form--main">
                <div className="cred-form__header">
                  <p className="form-title">Sign In</p>
                </div>

                <div className="cred-form__body">
                  {/* <div className="tab-wrap">
                    <div className="tab">
                      <button
                        type="button"
                        className={`tab__item ${
                          currentTab === 'emailTab' ? 'tab__item--active' : ''
                        }`}
                        onClick={e => handleCurrentTab(e, resetForm)}
                        name="emailTab"
                      >
                        Email
                      </button>

                      <button
                        type="button"
                        className={`tab__item ${
                          currentTab === 'phoneTab' ? 'tab__item--active' : ''
                        }`}
                        onClick={e => handleCurrentTab(e, resetForm)}
                        name="phoneTab"
                      >
                        Mobile
                      </button>
                    </div>
                  </div> */}

                  <div className="cred-field cred-field--bigger-mt">
                    <Field
                      type="text"
                      placeholder={L.translate('Pages.Auth.LoginPage.item1')}
                      className="input input--icon-right"
                      name="email"
                      component={Input}
                      validate={validateEmail}
                      isCheckMark
                    />
                  </div>

                  <div className="cred-field cred-field--bigger-mt">
                    <Field
                      type={!isShowPass ? 'password' : 'input'}
                      placeholder={L.translate('Pages.Auth.LoginPage.item2')}
                      className="input input--icon-right"
                      name="password"
                      component={Input}
                      validate={validatePassword}
                      isShowPass={isShowPass}
                      setIsShowPass={setIsShowPass}
                    />
                  </div>
                </div>

                <div className="cred-panel">
                  <Link
                    to={routes.Auth.ResetPassword.path}
                    className="forgot-pass"
                  >
                    {L.translate('Pages.Auth.LoginPage.item3')}
                  </Link>
                </div>

                <div className="cred-field ">
                  <Field
                    type="input"
                    placeholder={L.translate('Pages.Auth.LoginPage.item4')}
                    className="input s"
                    name="totp"
                    component={Input}
                  />
                </div>

                <div className="cred-panel">
                  <p className="cred-extra">
                    {L.translate('Pages.Auth.LoginPage.item5')}{' '}
                    <Link to={routes.Auth.Signup.path}>
                      {L.translate('Pages.Auth.LoginPage.item6')}
                    </Link>
                  </p>
                </div>

                <div className="form-submit ">
                  <button className="button button--full" type="submit">
                    {L.translate('Pages.Auth.LoginPage.item7')}
                  </button>
                </div>

                <div className="cred-extra-link">
                  <Link
                    to={routes.Auth.Reset2FA.path}
                    className="cred-extra-link__item"
                  >
                    {L.translate('Pages.Auth.LoginPage.item8')}
                  </Link>
                </div>
              </div>
            )}

            {currentTab === 'phoneTab' && (
              <div className="cred-form cred-form--main">
                <div className="cred-form__header">
                  <p className="form-title">
                    {L.translate('Pages.Auth.LoginPage.item9')}
                  </p>
                </div>

                <div className="cred-form__body">
                  <div className="tab-wrap">
                    <div className="tab">
                      <button
                        type="button"
                        className={`tab__item ${
                          currentTab === 'emailTab' ? 'tab__item--active' : ''
                        }`}
                        onClick={e => handleCurrentTab(e, resetForm)}
                        name="emailTab"
                      >
                        {L.translate('Pages.Auth.LoginPage.item10')}
                      </button>

                      <button
                        type="button"
                        className={`tab__item ${
                          currentTab === 'phoneTab' ? 'tab__item--active' : ''
                        }`}
                        onClick={e => handleCurrentTab(e, resetForm)}
                        name="phoneTab"
                      >
                        {L.translate('Pages.Auth.LoginPage.item11')}
                      </button>
                    </div>
                  </div>

                  <div className="cred-field cred-field--bigger-mt">
                    <div className="field-wrap">
                      <PhoneInput
                        country="us"
                        className="form-item form-item--icon-right form-item--type3"
                        onChange={handleChangePhone}
                        inputStyle={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="cred-field cred-field--bigger-mt">
                    <Field
                      type={!isShowPass ? 'password' : 'input'}
                      placeholder={L.translate('Pages.Auth.LoginPage.item12')}
                      className="input input--show-pass"
                      name="password"
                      component={Input}
                      validate={validatePassword}
                      isShowPass={isShowPass}
                      setIsShowPass={setIsShowPass}
                    />
                  </div>
                </div>

                <div className="cred-panel">
                  <Link
                    className="forgot-pass"
                    to={routes.Auth.ResetPassword.path}
                  >
                    {L.translate('Pages.Auth.LoginPage.item13')}
                  </Link>

                  <p className="cred-extra">
                    {L.translate('Pages.Auth.LoginPage.item14')}{' '}
                    <Link className="forgot-pass" to={routes.Auth.Signup.path}>
                      {L.translate('Pages.Auth.LoginPage.item15')}
                    </Link>
                  </p>
                </div>

                <div className="form-submit ">
                  <button className="button button--full">
                    {L.translate('Pages.Auth.LoginPage.item16')}
                  </button>
                </div>

                <div className="cred-extra-link">
                  <Link
                    to={routes.Auth.Reset2FA.path}
                    className="cred-extra-link__item"
                  >
                    {L.translate('Pages.Auth.LoginPage.item17')}
                  </Link>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </Auth>
  );
};

export default LoginPage;
