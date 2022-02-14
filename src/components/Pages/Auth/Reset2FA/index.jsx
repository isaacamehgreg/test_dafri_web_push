import React, { useState } from 'react';
import L from 'i18n-react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Input, TextArea } from '../../../Base/FormControls';
import {
  requiredValue,
  validateEmail,
  validateImageFile,
} from '../../../../services/validators';
import { closeModal, openModal } from '../../../Base/Modal';
import Captcha from '../../../Base/Modals/Captcha';
import InputError from '../../../Base/InputError';
import types from '../../../../redux/types';
import photoIcon from '../../../../styles/img/photo-icon.svg';
import notification from '../../../../services/notification';

const Reset2FA = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState({
    standartFile: null,
    base64: null,
  });

  const [fileError, setFileError] = useState(null);

  const initialValue = {
    email: '',
    message: '',
  };

  const handleCaptcha = (value, formValues, resetForm) => {
    closeModal();

    dispatch({
      type: types.RESET_2FA_SEND_FORM_START,
      payload: { ...formValues, file: file.base64, captcha: value },
    });

    resetForm();
  };

  const openCaptcha = (values, resetForm) => {
    openModal(() => (
      <Captcha
        handleCaptcha={value => handleCaptcha(value, values, resetForm)}
      />
    ));
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!fileError) {
      openCaptcha(values, resetForm);
    }
  };

  const setBlob = e => {
    const targetFile = e.target.files[0];

    if (targetFile) {
      if (
        targetFile.type === 'image/png' ||
        targetFile.type === 'image/jpeg' ||
        targetFile.type === 'image/wepb'
      ) {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(targetFile);

        fileReader.onloadend = function onLoadEnd() {
          const base64Code = fileReader.result;

          setFile({
            standartFile: targetFile,
            base64: base64Code,
          });
        };

        setFileError(validateImageFile(targetFile));
      } else {
        notification({
          type: 'info',
          timeOut: 6000,
          message: L.translate('Pages.Auth.Reset2FA.item7'),
        });
      }
    }
  };

  const validateFile = () => {
    const error = validateImageFile(file.standartFile);
    setFileError(error);
  };

  return (
    <section className="cred-section">
      <div className="cred-section__circle" />
      <div className="cred-section__wave" />

      <div className="cred-section__inner">
        <div className="custom-container">
          <div className="cred-form cred-form--reset-tfa">
            <div className="cred-form__header">
              <p className="form-title">
                {L.translate('Pages.Auth.Reset2FA.item1')}
              </p>
            </div>

            <Formik onSubmit={handleSubmit} initialValues={initialValue}>
              {({ resetForm, values, ...formik }) => (
                <Form className="cred-form__body">
                  <div className="cred-text cred-text--type2">
                    <p>{L.translate('Pages.Auth.Reset2FA.item2')}</p>
                  </div>

                  <div className="cred-field">
                    <div className="field-wrap">
                      <Field
                        type="text"
                        name="email"
                        className="input"
                        placeholder={L.translate('Pages.Auth.Reset2FA.item3')}
                        component={Input}
                        validate={validateEmail}
                      />
                    </div>
                  </div>

                  <div className="cred-field">
                    <Field
                      className="area-field"
                      name="message"
                      placeholder={L.translate('Pages.Auth.Reset2FA.item4')}
                      rows="5"
                      style={{ width: '100%' }}
                      component={TextArea}
                      validate={requiredValue}
                    />
                  </div>

                  <div className="form-upload">
                    <input
                      type="file"
                      name="file"
                      className="form-upload__item"
                      accept="image/png, image/jpeg, image/webp"
                      onChange={e => setBlob(e)}
                    />

                    <span className="form-upload__text">
                      <span className="form-upload__text-icon">
                        <img src={photoIcon} alt="" />
                      </span>
                      {L.translate('Pages.Auth.Reset2FA.item5')}
                    </span>
                  </div>

                  {fileError && (
                    <InputError errorText={fileError} position="center" />
                  )}

                  <div className="form-submit ">
                    <button
                      className="button button--small-width"
                      type="submit"
                      onClick={validateFile}
                    >
                      {L.translate('Pages.Auth.Reset2FA.item6')}
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

export default Reset2FA;
