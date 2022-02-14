import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import L from 'i18n-react';
import types from '../../../../redux/types';
import { Input } from '../../../Base/FormControls';
import { closeModal, openModal } from '../../../Base/Modal';
import Captcha from '../../../Base/Modals/Captcha';
import { validateEmail } from '../../../../services/validators';

const RecoveryLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    email: '',
  };

  const handleCaptcha = (value, values, resetForm) => {
    // const data = { ...values, captcha: value };
    closeModal();
    dispatch({
      type: types.RESET_PASSWORD_START,
      payload: { values, history },
    });
    resetForm();
  };

  const onSubmit = (values, { resetForm }) => {
    openModal(() => (
      <Captcha
        handleCaptcha={value => handleCaptcha(value, values, resetForm)}
      />
    ));
  };

  return (
    <Formik initialValues={{ ...initialValues }} onSubmit={onSubmit}>
      {({ setFieldValue, ...formik }) => (
        <section className="cred-section">
          <div className="cred-section__circle" />
          <div className="cred-section__wave" />
          <div className="cred-section__inner">
            <div className="custom-container">
              <Form className="cred-form">
                <div className="cred-form__header">
                  <p className="form-title">
                    {L.translate('Pages.Auth.ForgotPasswordPage.item1')}
                  </p>
                </div>
                <div className="cred-form__body">
                  <div className="cred-text">
                    <p>{L.translate('Pages.Auth.ForgotPasswordPage.item2')}</p>
                  </div>
                  <div className="cred-field">
                    <Field
                      type="text"
                      placeholder={L.translate(
                        'Pages.Auth.ForgotPasswordPage.item3',
                      )}
                      className="input"
                      name="email"
                      validate={validateEmail}
                      component={Input}
                    />
                  </div>
                </div>
                <div className="form-submit form-submit--bigger-mt">
                  <button className="button button--small-width" type="submit">
                    {L.translate('Pages.Auth.ForgotPasswordPage.item4')}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
};

export default RecoveryLogin;
