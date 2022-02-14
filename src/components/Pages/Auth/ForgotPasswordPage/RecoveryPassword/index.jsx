import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import L from 'i18n-react';
import types from '../../../../../redux/types';
import { Input } from '../../../../Base/FormControls';
import {
  validatePassword,
  validateConfirmPassword,
} from '../../../../../services/validators';

const RecoveryPassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const initialValues = {
    password: '',
    password_confirm: '',
  };

  const search =
    location.search && location.search.length ? location.search.slice(1) : null;

  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);
  const onSubmit = (values, { resetForm }) => {
    const payload = {
      ...values,
      token: search,
      history,
    };
    dispatch({ type: types.CHANGE_PASSWORD_START, payload });
    resetForm();
  };

  return (
    <section className="cred-section">
      <div className="cred-section__circle" />
      <div className="cred-section__wave" />
      <div className="cred-section__inner">
        <div className="custom-container">
          <Formik initialValues={{ ...initialValues }} onSubmit={onSubmit}>
            {({ setFieldValue, ...formik }) => {
              const passwordValue = formik.values.password;
              return (
                <Form className="cred-form">
                  <div className="cred-form__header">
                    <p className="form-title">
                      {L.translate(
                        'Pages.Auth.ForgotPasswordPage.RecoveryPassword.item1',
                      )}
                    </p>
                  </div>
                  <div className="cred-form__body">
                    <div className="cred-field">
                      <Field
                        type={!isShowPass ? 'password' : 'input'}
                        className="input input--show-pass"
                        placeholder={L.translate(
                          'Pages.Auth.ForgotPasswordPage.RecoveryPassword.item2',
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
                          'Pages.Auth.ForgotPasswordPage.RecoveryPassword.item3',
                        )}
                        name="password_confirm"
                        component={Input}
                        validate={value =>
                          validateConfirmPassword(value, passwordValue)
                        }
                        isShowConfirmPass={isShowConfirmPass}
                        setIsShowConfirmPass={setIsShowConfirmPass}
                      />
                    </div>
                  </div>
                  <div className="form-submit form-submit--bigger-mt">
                    <button className="button button--full">
                      {L.translate(
                        'Pages.Auth.ForgotPasswordPage.RecoveryPassword.item4',
                      )}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default RecoveryPassword;
