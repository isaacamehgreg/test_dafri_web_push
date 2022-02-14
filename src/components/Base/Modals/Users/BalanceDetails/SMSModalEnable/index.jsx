import React from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../Modal';
import { Input } from '../../../../FormControls';
import {
  phoneRegex,
  validate2FA,
  validatePhone,
} from '../../../../../../services/validators';
import { settingsSelector } from '../../../../../../redux/users/settings/selectors';
import { hideEmail } from '../../../../../../services/helpers';
import types from '../../../../../../redux/types';
import closeIcon from '../../../../../../styles/img/closeIcon.svg';
import notification from '../../../../../../services/notification';

const SMSModalEnable = () => {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const google2fa = settings?.google2fa_enabled;
  const email = hideEmail(settings?.email);

  const initValue = {
    phone: '',
    sms_code: '',
    email_code: '',
    totp: '',
  };

  const getSMSCode = (errorText, phone) => {
    if (!errorText) {
      const payload = {
        type: 'sms',
        operation: '',
        amount: '',
        wallet_id: '',
        phone: `+${phone}`,
      };

      dispatch({ type: types.GET_SMS_CODE_START, payload });
    } else {
      notification({
        type: 'error',
        timeOut: 5000,
        message: 'Please, enter correct phone',
      });
    }
  };

  const getEmailCode = () =>
    dispatch({
      type: types.GET_EMAIL_CODE_START,
      payload: {
        operation: '',
        amount: '',
        wallet_id: '',
        type: 'email',
      },
    });

  const handleSubmit = (values, { resetForm }) => {
    dispatch({
      type: types.ENABLE_2FA_PHONE_START,
      payload: { ...values, phone: `+${values.phone}` },
    });

    resetForm();
    closeModal();
  };

  return (
    <div className="modal modal--medium">
      <button className="close-modal" onClick={closeModal}>
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="modal-header">
        <p className="modal-title">
          {L.translate('Base.Modals.Users.BalanceDetails.SMSModalEnable.item1')}
        </p>
      </div>

      <Formik onSubmit={handleSubmit} initialValues={initValue}>
        {({ setFieldValue, values, errors, validateField, ...formik }) => (
          <Form className="modal-body">
            <div className="modal-field">
              <p className="field-label">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalEnable.item2',
                )}
              </p>
              <div className="field-wrap">
                <Field
                  type="number"
                  name="phone"
                  className="input"
                  placeholder="+"
                  component={Input}
                  pattern={phoneRegex}
                  validate={validatePhone}
                />
              </div>
            </div>

            <div className="modal-field">
              <p className="field-label">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalEnable.item3',
                )}
              </p>

              <Field
                type="text"
                name="sms_code"
                className="input input--with-btn"
                placeholder={L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalEnable.item4',
                )}
                isSendBtn="true"
                sendBtnCallback={() =>
                  validateField('phone').then(res =>
                    getSMSCode(res, values.phone),
                  )
                }
                component={Input}
                validate={validate2FA}
              />

              <p className="field-hint field-hint--type2">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalEnable.item5',
                )}
              </p>
            </div>

            <div className="modal-field">
              <p className="field-label">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalEnable.item6',
                )}
              </p>

              <Field
                type="text"
                name="email_code"
                className="input input--with-btn"
                placeholder={L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalEnable.item7',
                )}
                component={Input}
                isSendBtn="true"
                sendBtnCallback={getEmailCode}
                validate={validate2FA}
              />

              <p className="field-hint ">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalEnable.item8',
                )}
                {email}.
              </p>
            </div>

            {!!google2fa && (
              <div className="modal-field">
                <p className="field-label">
                  {L.translate(
                    'Base.Modals.Users.BalanceDetails.SMSModalEnable.item9',
                  )}
                </p>

                <Field
                  type="text"
                  name="totp"
                  className="input"
                  placeholder={L.translate(
                    'Base.Modals.Users.BalanceDetails.SMSModalEnable.item10',
                  )}
                  component={Input}
                  validate={validate2FA}
                />

                <p className="field-hint">
                  {L.translate(
                    'Base.Modals.Users.BalanceDetails.SMSModalEnable.item11',
                  )}
                </p>
              </div>
            )}

            <div className="form-submit ">
              <button className="button button--wider" type="submit">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalEnable.item12',
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SMSModalEnable;
