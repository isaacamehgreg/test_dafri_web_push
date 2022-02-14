import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import L from 'i18n-react';
import types from '../../../../redux/types';
import { Input } from '../../../Base/FormControls';
import {
  validatePassword,
  validateConfirmPassword,
} from '../../../../services/validators';
import { closeModal, openModal } from '../../../Base/Modal';
import Captcha from '../../../Base/Modals/Captcha';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    old_password: '',
    password: '',
    c_password: '',
  };
  const [isShowOldPass, setIsShowOldPass] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);

  const onSubmit = (values, { resetForm }) => {
    dispatch({
      type: types.CHANGE_USER_PASSWORD_START,
      payload: { values, history },
    });
    resetForm();
  };

  return (
    <section className="cred-section">
      <div className="cred-section__circle" />
      <div className="cred-section__wave" />
      <div className="cred-section__inner">
        <Formik initialValues={{ ...initialValues }} onSubmit={onSubmit}>
          {({ setFieldValue, ...formik }) => {
            const passwordValue = formik.values.password;
            return (
              <div className="custom-container">
                <Form className="cred-form">
                  <div className="cred-form__header">
                    <p className="form-title">
                      {L.translate('Pages.Auth.ChangePassword.item1')}
                    </p>
                  </div>
                  <div className="cred-form__body">
                    <div className="cred-field">
                      <Field
                        type={!isShowOldPass ? 'password' : 'input'}
                        className="input input--show-pass"
                        placeholder={L.translate(
                          'Pages.Auth.ChangePassword.item2',
                        )}
                        name="old_password"
                        validate={validatePassword}
                        component={Input}
                        isShowOldPass={isShowOldPass}
                        setIsShowOldPass={setIsShowOldPass}
                      />
                    </div>
                    <div className="cred-field">
                      <Field
                        type={!isShowPass ? 'password' : 'input'}
                        className="input input--show-pass"
                        placeholder={L.translate(
                          'Pages.Auth.ChangePassword.item3',
                        )}
                        name="password"
                        validate={validatePassword}
                        component={Input}
                        isShowPass={isShowPass}
                        setIsShowPass={setIsShowPass}
                      />
                    </div>
                    <div className="cred-field">
                      <Field
                        type={!isShowConfirmPass ? 'password' : 'input'}
                        className="input input--show-pass"
                        placeholder={L.translate(
                          'Pages.Auth.ChangePassword.item4',
                        )}
                        name="c_password"
                        validate={value =>
                          validateConfirmPassword(value, passwordValue)
                        }
                        component={Input}
                        isShowConfirmPass={isShowConfirmPass}
                        setIsShowConfirmPass={setIsShowConfirmPass}
                      />
                    </div>
                  </div>
                  <div className="form-submit form-submit--bigger-mt">
                    <button className="button button--full" type="submit">
                      {L.translate('Pages.Auth.ChangePassword.item5')}
                    </button>
                  </div>
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
                    <span>
                      {L.translate('Pages.Auth.ChangePassword.item6')}
                    </span>
                  </p>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default ChangePassword;
