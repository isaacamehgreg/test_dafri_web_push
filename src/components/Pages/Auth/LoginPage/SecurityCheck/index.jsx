import React, { useCallback, useEffect, useState, useRef } from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import routes from '../../../../../routes';
import types from '../../../../../redux/types';
import Auth from '../../../../HOC/Auth';
import { Input } from '../../../../Base/FormControls';
import { closeModal, openModal } from '../../../../Base/Modal';

const SecurityCheck = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const locationData = location.state;
  const [time, setTime] = useState(new Date().getTime() + 60 * 1000);
  const [timer, setTimer] = useState(0);

  const initialValues = {
    sms: '',
  };

  useEffect(() => {
    let intervelId;
    if (time) {
      const dooble = num => (String(num).length === 1 ? `0${num}` : num);

      const result = {
        seconds: 0,
        minutes: 0,
      };

      if (intervelId) {
        clearInterval(intervelId);
      }

      if (time) {
        intervelId = setInterval(() => {
          const currentTime = String(new Date().getTime()).slice(0, 10);
          const endTime = String(time).slice(0, 10);
          const leftTime = +endTime - +currentTime;
          const duration = moment.duration(leftTime, 'seconds');

          result.seconds = dooble(duration.seconds());

          if (result.seconds === -1) {
            clearInterval(intervelId);
            setTime(0);
            setTimer(0);
            return;
          }

          setTimer(result.seconds);
        }, 1000);
      }
    }
    return () => {
      clearInterval(intervelId);
    };
  }, [time]);

  const onSubmit = (values, { resetForm }) => {
    dispatch({
      type: types.LOGIN_BY_SMS_START,
      payload: { ...values, phone: locationData?.phone, remember: 0 },
      history,
    });
    resetForm();
  };

  const handleResendCode = () => {
    dispatch({
      type: types.POST_RESEND_SMS_CODE_START,
      payload: {
        phone: locationData?.phone,
      },
    });
    setTime(new Date().getTime() + 60 * 1000);
  };

  return (
    <Auth>
      <Formik initialValues={{ ...initialValues }} onSubmit={onSubmit}>
        {({ setFieldValue, resetForm, ...formik }) => (
          <Form className="cred-container__right">
            <div className="cred-form cred-form--main">
              <div className="cred-form__header">
                <p className="form-title">
                  {L.translate('Pages.Auth.LoginPage.SecurityCheck.item1')}
                </p>
              </div>
              <div className="cred-form__body">
                <div className="cred-text cred-text--type2">
                  <p>
                    {L.translate('Pages.Auth.LoginPage.SecurityCheck.item2')}
                  </p>
                </div>

                <div className="cred-field cred-field--bigger-mt">
                  <div className="field-form">
                    <div className="field-form__input">
                      <Field
                        type="text"
                        placeholder={L.translate(
                          'Pages.Auth.LoginPage.SecurityCheck.item3',
                        )}
                        className="input"
                        name="sms"
                        component={Input}
                      />
                    </div>
                    <div className="field-form__btn">
                      <button
                        className={`page-btn page-btn--full ${
                          timer ? 'page-btn--resend' : ''
                        }`}
                        style={{ padding: '5px', fontSize: '12px' }}
                        disabled={!!timer}
                        type="button"
                        onClick={handleResendCode}
                      >
                        {timer ? <span>{timer}s</span> : null}
                        {' resend'}
                      </button>
                    </div>
                  </div>
                  <p className="field-hint field-hint--bigger-mt field-hint--type2">
                    {L.translate('Pages.Auth.LoginPage.SecurityCheck.item4')}{' '}
                    {`${locationData?.phone?.slice(
                      0,
                      6,
                    )} *** ${locationData?.phone?.slice(-4)}`}
                  </p>
                </div>
              </div>
              <div className="form-submit ">
                <button className="button button--full">
                  {L.translate('Pages.Auth.LoginPage.SecurityCheck.item5')}
                </button>
              </div>
              <div className="cred-panel">
                <Link
                  className="forgot-pass"
                  to={routes.Auth.ResetPassword.path}
                >
                  {L.translate('Pages.Auth.LoginPage.SecurityCheck.item6')}
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Auth>
  );
};

export default SecurityCheck;
