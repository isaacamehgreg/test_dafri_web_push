import React from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../Modal';
import { Input } from '../../../../FormControls';
import { validate2FA } from '../../../../../../services/validators';
import { settingsSelector } from '../../../../../../redux/users/settings/selectors';
import { hideEmail } from '../../../../../../services/helpers';
import notification from '../../../../../../services/notification';
import types from '../../../../../../redux/types';
import closeIcon from '../../../../../../styles/img/closeIcon.svg';

const SMSModalDisable = () => {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const google2fa = settings?.google2fa_enabled;
  const email = hideEmail(settings?.email);
  const phone = settings?.data?.phone;

  const initValue = {
    sms_code: '',
    email_code: '',
    totp: '',
    phone,
  };

  const getSMSCode = () => {
    const payload = {
      phone,
      type: 'sms',
      operation: '',
    };

    dispatch({ type: types.GET_SMS_CODE_START, payload });
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
    dispatch({ type: types.DISABLE_2FA_PHONE_START, payload: { ...values } });
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
          {L.translate(
            'Base.Modals.Users.BalanceDetails.SMSModalDisable.item1',
          )}
        </p>
      </div>

      <Formik onSubmit={handleSubmit} initialValues={initValue}>
        {({ setFieldValue, values, ...formik }) => (
          <Form className="modal-body">
            <div className="modal-field">
              <p className="field-label">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalDisable.item2',
                )}
              </p>

              <Field
                type="text"
                name="sms_code"
                className="input input--with-btn"
                placeholder={L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalDisable.item3',
                )}
                component={Input}
                isSendBtn="true"
                sendBtnCallback={getSMSCode}
                validate={validate2FA}
              />

              <p className="field-hint field-hint--type2">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalDisable.item4',
                )}
              </p>
            </div>

            <div className="modal-field">
              <p className="field-label">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalDisable.item5',
                )}
              </p>

              <Field
                type="text"
                name="email_code"
                className="input input--with-btn"
                placeholder={L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalDisable.item6',
                )}
                component={Input}
                isSendBtn="true"
                sendBtnCallback={getEmailCode}
                validate={validate2FA}
              />

              <p className="field-hint ">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalDisable.item7',
                )}
                {email}.
              </p>
            </div>

            {!!google2fa && (
              <div className="modal-field">
                <p className="field-label">
                  {L.translate(
                    'Base.Modals.Users.BalanceDetails.SMSModalDisable.item8',
                  )}
                </p>

                <Field
                  type="text"
                  name="totp"
                  className="input"
                  placeholder={L.translate(
                    'Base.Modals.Users.BalanceDetails.SMSModalDisable.item9',
                  )}
                  component={Input}
                  validate={validate2FA}
                />

                <p className="field-hint ">
                  {L.translate(
                    'Base.Modals.Users.BalanceDetails.SMSModalDisable.item10',
                  )}
                </p>
              </div>
            )}

            <div className="form-submit ">
              <button className="button button--wider" type="submit">
                {L.translate(
                  'Base.Modals.Users.BalanceDetails.SMSModalDisable.item11',
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SMSModalDisable;
