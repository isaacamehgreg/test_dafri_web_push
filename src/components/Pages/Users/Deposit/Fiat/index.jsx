import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
// Form
import { Formik, Form, Field } from 'formik';
import { InputWithOnChange } from '../../../../Base/FormControls';
import { requiredPositiveNumber } from '../../../../../services/validators';
// Modals
import { openModal } from '../../../../Base/Modal';
import BankPaymentDetails from '../../../../Base/Modals/Users/Deposit/BankPaymentDetails';
// Other page components
import SupportedCurrency from '../SupportedCurrency';
import PaymentMethods from '../PaymentMethods';
import TransferCheck from '../TransferCheck';
import CopyToClipboard from '../CopyToClipboard';
import InputAction from '../InputAction';
import AgreeAndTerms from '../../../../Base/Modals/Users/Deposit/AgreeAndTerms';
import DafriPayForm from '../../DafriPayForm';
import { referenceNumberSelector } from '../../../../../redux/auth/selectors';
import {
  paymentLinkSelector,
  paymentMethodsSelector,
} from '../../../../../redux/wallets/selectors';
import types from '../../../../../redux/types';
import notification from '../../../../../services/notification';
import Circle from '../../../../Base/Modals/Users/Deposit/Circle/CircleComponent';
import PaymentAgent from '../../Withdraw/PaymentAgent';
import SocketOzow from '../../../../HOC/SocketOzow';
import SocketDafriBank from '../../../../HOC/SocketDafriBank';

// Labels
const fiatLabels = [
  L.translate('Pages.Users.Deposit.Fiat.item6'),
  L.translate('Pages.Users.Deposit.Fiat.item7'),
  L.translate('Pages.Users.Deposit.Fiat.item8'),
  L.translate('Pages.Users.Deposit.Fiat.item9'),
];

const DepositFiat = ({ fiatData, mobileData, isActive }) => {
  const dispatch = useDispatch();
  const referenceNumber = useSelector(referenceNumberSelector);
  const assetPayments = useSelector(paymentMethodsSelector);
  const paymentLink = useSelector(paymentLinkSelector);

  const [agree, toggleAgree] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [allPaymentTypes, setAllPaymentTypes] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  // Agree logic
  const handleToggleAgree = () => toggleAgree(!agree);

  // Select currency logic
  const handleCurrencySelect = currency => {
    setSelectedCurrency(currency);
    setSelectedType(null);
  };

  // Select payment method
  const handleSelectPaymentType = item => {
    setSelectedType(item);
  };

  // Form logic
  const initialValues = {
    amount: '',
  };

  const handleChangeAmount = (e, setFieldValue, validateField) => {
    setFieldValue('amount', e.target.value.replace(/[^\d]/gi, ''));
    validateField('amount');
  };

  const handleSelectMethod = (values, resetForm) => {
    switch (selectedType?.name_method?.toLowerCase()) {
      case 'ozow':
        dispatch({
          type: types.CREATE_OZOW_REQUEST_START,
          payload: values.amount,
        });
        break;

      case 'dafribank epay':
        dispatch({
          type: types.MAKE_DAFRIBANK_PAYMENT_START,
          payload: {
            amount: values.amount,
            asset_id: selectedCurrency.assetID,
            payment_type: 'deposit',
          },
        });
        break;

      case 'visa_mastercard':
        break;

      case 'payment agent':
        console.log('payment agent');
        break;

      case null:
      case undefined:
        dispatch({
          type: types.CREATE_BANK_REQUEST_START,
          payload: {
            amount: values.amount,
            asset_id: selectedCurrency.assetID,
            bank_id: selectedType.manual_bank_id,
          },
        });
        break;

      default:
        return notification({
          type: 'error',
          timeOut: 5000,
          message: L.translate('Pages.Users.Deposit.Fiat.item12'),
        });
    }

    resetForm();
  };

  const handleSubmit = (values, { resetForm }) => {
    openModal(() => (
      <AgreeAndTerms
        onAgree={() => handleSelectMethod(values, resetForm)}
        method={selectedType?.name_method}
        amount={values.amount}
        assetID={selectedCurrency?.assetID}
      />
    ));
  };

  const sendBankInfoToEmail = () => {
    dispatch({
      type: types.SEND_BANK_INFO_TO_EMAIL_START,
      payload: { bank_id: selectedType.manual_bank_id },
      message: L.translate('Pages.Users.Deposit.Fiat.item11'),
    });
  };

  useEffect(() => {
    if (selectedCurrency && assetPayments && selectedCurrency?.assetID) {
      const { deposit } = assetPayments[selectedCurrency?.assetID];
      setAllPaymentTypes(deposit);
    }
  }, [selectedCurrency, assetPayments]);

  useEffect(() => {
    if (
      paymentLink &&
      typeof paymentLink === 'string' &&
      paymentLink.match('https')
    ) {
      const newWindow = window.open(
        paymentLink,
        '_blank',
        'noopener, noreferrer',
      );
      if (newWindow) newWindow.opener = null;
    }

    if (
      paymentLink &&
      paymentLink instanceof Object &&
      paymentLink?.status &&
      agree
    ) {
      notification({
        type: 'success',
        timeOut: 5000,
        message: L.translate('Pages.Users.Deposit.Fiat.item13'),
      });
    }

    if (
      paymentLink &&
      selectedType?.name_method === 'DafriBank ePay' &&
      agree
    ) {
      const form = document.querySelector('#dafriform');
      if (form) form.submit();
    }
  }, [paymentLink]);

  // Dafribank check form mobile
  const [dafriFormEndabled, setDafriFormEnabled] = useState(false);
  useEffect(() => {
    if (mobileData && paymentLink && dafriFormEndabled) {
      const form = document.querySelector('#dafriform');
      form.submit();
    }
  }, [dafriFormEndabled, paymentLink]);

  useEffect(() => {
    if (mobileData) {
      const { amount, paymentType, assetId } = mobileData;

      switch (paymentType) {
        case 'circle':
          openModal(() => <Circle amount={amount} assetID={assetId} />);
          break;

        case 'dafribank':
          dispatch({
            type: types.MAKE_DAFRIBANK_PAYMENT_START,
            payload: {
              amount,
              asset_id: assetId,
              payment_type: 'deposit',
            },
          });
          break;

        default:
          return true;
      }
    }
  }, []);

  useEffect(() => {
    setSelectedType(null);
    setSelectedCurrency(null);
  }, [isActive]);

  return (
    <>
      {selectedType?.name_method === 'ozow' && <SocketOzow />}
      {selectedType?.name_method === 'DafriBank ePay' && <SocketDafriBank />}

      <SupportedCurrency
        labels={fiatLabels}
        data={fiatData}
        title={L.translate('Pages.Users.Deposit.Fiat.item1')}
        activeEl={selectedCurrency?.assetID}
        onSelectItem={handleCurrencySelect}
      />

      <div className="transfer-block">
        <p className="item-title item-title--bigger my-balance__title">
          {L.translate('Pages.Users.Deposit.Fiat.item2')}
        </p>

        <CopyToClipboard
          copyMessage={L.translate('Pages.Users.Deposit.Fiat.item3')}
          adress={referenceNumber}
        />
      </div>

      <PaymentMethods
        paymentTypes={allPaymentTypes}
        onSelect={handleSelectPaymentType}
        selectedMethod={selectedType}
      />

      {selectedType?.name_method === 'payment agent' && (
        <PaymentAgent
          selectedPaymentAgent={selectedAgent}
          handleSelectedPaymentAgent={setSelectedAgent}
          type="deposit"
        />
      )}

      {selectedType?.name_method !== 'payment agent' && (
        <TransferCheck
          text={L.translate('Pages.Users.Deposit.Fiat.item10')}
          onChange={handleToggleAgree}
          checked={agree}
          isFiat
        />
      )}

      {agree && selectedType && (
        <>
          {!(selectedType?.name_method !== null) && (
            <div className="transfer-block transfer-block--less-mt">
              <div className="selected-method">
                <div className="method method--bank-and-copy">
                  <div className="method-item ">
                    <div className="method-item__logo">
                      <img src={selectedType?.img_path} alt="" />
                    </div>

                    <div className="method-btn">
                      {selectedType?.manual_bank?.bank_name?.toUpperCase()}
                    </div>
                  </div>

                  <InputAction
                    withBank
                    btnText="Send"
                    copyMessage={L.translate('Pages.Users.Deposit.Fiat.item11')}
                    onCopy={sendBankInfoToEmail}
                    handleWithBank={() =>
                      openModal(() => (
                        <BankPaymentDetails
                          bankInfo={selectedType?.manual_bank}
                        />
                      ))
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {selectedType?.name_method !== 'payment agent' && (
            <>
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({
                  resetForm,
                  values,
                  handleChange,
                  setFieldValue,
                  errors,
                  validateField,
                  ...formik
                }) => {
                  const checkDisabled = () => {
                    let disabled = true;

                    if (values.amount > 0) {
                      disabled = false;
                    } else if (errors.amount) {
                      disabled = true;
                    }

                    return disabled;
                  };

                  const isDisabledBtn = checkDisabled();

                  return (
                    <Form className="transfer-option">
                      <div className="transfer-amount">
                        <div className="transfer-amount__field">
                          <div className="field-wrap">
                            <Field
                              type="text"
                              name="amount"
                              className="input input--big input--type2 input--with-currency"
                              placeholder={L.translate(
                                'Pages.Users.Deposit.Fiat.item4',
                              )}
                              textCurrency={selectedCurrency?.code?.toUpperCase()}
                              onChange={e =>
                                handleChangeAmount(
                                  e,
                                  setFieldValue,
                                  validateField,
                                )
                              }
                              component={InputWithOnChange}
                              validate={requiredPositiveNumber}
                            />
                          </div>
                        </div>

                        <div className="transfer-amount__btn">
                          <button
                            type="submit"
                            className="button button--big"
                            disabled={isDisabledBtn ? 'disabled' : null}
                          >
                            {L.translate('Pages.Users.Deposit.Fiat.item5')}
                          </button>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </>
          )}
        </>
      )}

      {paymentLink && (
        <DafriPayForm
          type="deposit"
          target={!mobileData}
          formData={paymentLink}
          onLoadCallback={setDafriFormEnabled}
        />
      )}
    </>
  );
};

export default DepositFiat;
