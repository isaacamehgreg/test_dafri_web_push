import React, { useEffect } from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../Modal';
import { Input } from '../../../../FormControls';
import { validate2FA } from '../../../../../../services/validators';
import {
  settingsSelector,
  userSelector,
} from '../../../../../../redux/users/settings/selectors';
import { hideEmail } from '../../../../../../services/helpers';
import types from '../../../../../../redux/types';
import closeIcon from '../../../../../../styles/img/closeIcon.svg';
import { walletSelector } from '../../../../../../redux/wallets/selectors';

const SecurityChecked = ({
  type,
  data,
  resetWithdrawFields,
  assetCode = 'btc',
  walletId,
  debounceInputRef,
}) => {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const wallet = useSelector(walletSelector);
  const user = useSelector(userSelector);
  const google2fa = settings?.google2fa_enabled;
  const email = hideEmail(settings?.email);
  const phoneNumber = user?.data?.phone;
  const phoneConfirmed = user?.sms_enabled;
  const { withdrawAmountInUsd } = wallet;

  const initValue = {
    sms_code: '',
    email_code: '',
    totp: '',
  };

  useEffect(() => {
    dispatch({
      type: types.GET_WITHDRAW_AMOUNT_IN_USD_START,
      payload: {
        params: {
          amount: data?.amount,
          wallet_id: data?.wallet_id || walletId,
        },
      },
    });
  }, []);

  const getSMSCode = () => {
    const payload = {
      phone: `${phoneNumber}`,
      type: 'sms',
      operation: 'withdrawal',
      amount: data?.amount,
      wallet_id: type === 'crypto' ? data?.wallet_id : data?.asset_id,
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

  const handleSubmit = values => {
    switch (type) {
      case 'bank-fiat':
        dispatch({
          type: types.POST_FIAT_BANKS_WITHDRAW_START,
          payload: { ...values, ...data },
          resetWithdrawFields,
        });
        break;

      case 'payment-agent-bank-fiat':
        dispatch({
          type: types.POST_PAYMENT_AGENT_FIAT_BANKS_WITHDRAW_START,
          payload: { ...values, ...data },
          resetWithdrawFields,
          debounceInputRef,
        });
        break;

      case 'crypto':
        dispatch({
          type: types.POST_CRYPTO_WITHDRAW_START,
          payload: { ...values, ...data },
          assetCode,
          resetWithdrawFields,
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className="modal modal--medium">
      <button className="close-modal" onClick={closeModal}>
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="modal-header">
        <p className="modal-title">
          {L.translate('Base.Modals.Users.Withdraw.SecurityChecked.item1')}
        </p>
      </div>

      <Formik onSubmit={handleSubmit} initialValues={initValue}>
        {({ setFieldValue, values, errors, validateField, ...formik }) => (
          <Form className="modal-body">
            {phoneConfirmed && +withdrawAmountInUsd > 5000 ? (
              <div className="modal-field">
                <p className="field-label">
                  {L.translate(
                    'Base.Modals.Users.Withdraw.SecurityChecked.item2',
                  )}
                </p>

                <Field
                  type="text"
                  name="sms_code"
                  className="input input--with-btn"
                  placeholder={L.translate(
                    'Base.Modals.Users.Withdraw.SecurityChecked.item3',
                  )}
                  isSendBtn="true"
                  sendBtnCallback={getSMSCode}
                  component={Input}
                  validate={validate2FA}
                />

                <p className="field-hint field-hint--type2">
                  {L.translate(
                    'Base.Modals.Users.Withdraw.SecurityChecked.item4',
                  )}
                </p>
              </div>
            ) : null}

            <div className="modal-field">
              <p className="field-label">
                {L.translate(
                  'Base.Modals.Users.Withdraw.SecurityChecked.item5',
                )}
              </p>

              <Field
                type="text"
                name="email_code"
                className="input input--with-btn"
                placeholder={L.translate(
                  'Base.Modals.Users.Withdraw.SecurityChecked.item6',
                )}
                component={Input}
                isSendBtn="true"
                sendBtnCallback={getEmailCode}
                validate={validate2FA}
              />

              <p className="field-hint ">
                {L.translate(
                  'Base.Modals.Users.Withdraw.SecurityChecked.item7',
                )}{' '}
                {email}.
              </p>
            </div>

            {!!google2fa && (
              <div className="modal-field">
                <p className="field-label">
                  {L.translate(
                    'Base.Modals.Users.Withdraw.SecurityChecked.item8',
                  )}
                </p>

                <Field
                  type="text"
                  name="totp"
                  className="input"
                  placeholder={L.translate(
                    'Base.Modals.Users.Withdraw.SecurityChecked.item9',
                  )}
                  component={Input}
                  validate={validate2FA}
                />

                <p className="field-hint">
                  {L.translate(
                    'Base.Modals.Users.Withdraw.SecurityChecked.item10',
                  )}
                </p>
              </div>
            )}

            <div className="form-submit ">
              <button className="button button--wider" type="submit">
                {L.translate(
                  'Base.Modals.Users.Withdraw.SecurityChecked.item11',
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SecurityChecked;
