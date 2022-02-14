import React, { useEffect, useRef, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
// Form
import { Formik, Form, Field } from 'formik';
import {
  DebounceFormikInput,
  InputWithOnChange,
} from '../../../../Base/FormControls';
import { requiredPositiveNumber } from '../../../../../services/validators';
// Modals
import { openModal } from '../../../../Base/Modal';
import DafriBankModalWithdraw from '../../../../Base/Modals/Users/Withdraw/DafriBank';
// Other page components
import SupportedCurrency from '../SupportedCurrency';
import TransferCheck from '../TransferCheck';
import CopyToClipboard from '../CopyToClipboard';
import {
  referenceNumberSelector,
  userSelector,
  withdrawal24Selector,
} from '../../../../../redux/auth/selectors';
import {
  paymentLinkSelector,
  paymentMethodsSelector,
} from '../../../../../redux/wallets/selectors';
import TransferLimit from '../TransferLimit';

// Images
import BankDetails from '../../../../Base/Modals/Users/Withdraw/BankDetails';
import PaymentMethods from '../PaymentMethods';
import PaymentAgent from '../PaymentAgent';
import { paymentAgentCommissionSelector } from '../../../../../redux/paymentAgent/selectors';
import types from '../../../../../redux/types';
import DafriPayForm from '../../DafriPayForm';

const fiatLabels = ['Fiat', 'Total', 'Available', 'Locked'];

const WithdrawalFiat = ({ fiatData, location, mobileData }) => {
  const dispatch = useDispatch();

  const referenceNumber = useSelector(referenceNumberSelector);
  const user = useSelector(userSelector);
  const withdrawal24 = useSelector(withdrawal24Selector);
  const paymentAgentCommission = useSelector(paymentAgentCommissionSelector);
  const paymentLink = useSelector(paymentLinkSelector);
  const assetPayments = useSelector(paymentMethodsSelector);

  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [allPaymentTypes, setAllPaymentTypes] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const [selectedAgent, setSelectedAgent] = useState(null);
  const paymentAgentUserId = selectedAgent?.user_id;

  const [agree, toggleAgree] = useState(false);

  const [formValue, setFormValue] = useState(0);
  const [currentAssetFee, setCurrentAssetFee] = useState(0);
  const [agentFee, setAgentFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Agree logic
  const handleToggleAgree = () => toggleAgree(!agree);

  // Select currency logic
  const clearPrevSelected = (resetSelectedCur = false) => {
    if (agree) handleToggleAgree();
    if (resetSelectedCur) setSelectedCurrency(null);
    setAllPaymentTypes(null);
    setSelectedType(null);
    setFormValue(0);
  };

  const handleCurrencySelect = currency => {
    setSelectedCurrency(currency);
    clearPrevSelected();
  };

  // Select payment method
  const handleSelectPaymentType = item => {
    setSelectedType(item);
  };

  // Form logic
  const debounceInputRef = useRef();

  const initialValues = {
    amount: '',
  };

  const handleSubmit = values => {
    switch (selectedType?.name_method) {
      case 'manual withdrawal':
        openModal(() => (
          <BankDetails
            data={{
              ...values,
              asset_id: selectedCurrency?.assetID,
            }}
            resetWithdrawFields={clearPrevSelected}
            type="bank-fiat"
            walletId={selectedCurrency?.id}
          />
        ));
        break;

      case 'payment agent':
        openModal(() => (
          <BankDetails
            data={{
              ...values,
              asset_id: selectedCurrency?.assetID,
              user_id: paymentAgentUserId,
            }}
            resetWithdrawFields={clearPrevSelected}
            type="payment-agent-bank-fiat"
            walletId={selectedCurrency?.id}
            debounceInputRef={debounceInputRef}
          />
        ));
        break;

      case 'DafriBank ePay':
        openModal(() => (
          <DafriBankModalWithdraw
            formData={{
              amount: values.amount,
              asset_id: selectedCurrency?.assetID,
              payment_type: 'withdraw',
            }}
          />
        ));
        break;

      default:
        break;
    }
  };

  const handleAmountChange = (e, value, handleChange) => {
    if (value > 0) {
      dispatch({
        type: types.CALCULATE_PAYMENT_AGENT_COMMISSION_START,
        payload: {
          amount: +value,
          asset_id: selectedCurrency?.assetID,
          id: paymentAgentUserId,
          type: 'withdraw_fee',
        },
      });
    }

    setFormValue(value);
    handleChange(e.target.name, value);
  };

  const getTotalAmount = (amount, fee, paymentAgentFee = 0) => {
    return amount > 0 ? amount - (amount * (fee + paymentAgentFee)) / 100 : 0;
  };

  const handleChangeAmount = (e, setFieldValue, validateField) => {
    setFieldValue(e.target.name, e.target.value.replace(/,/g, '.'));
    validateField(e.target.name);
  };

  const handleSetMaxSum = (e, handleSetField, validateField) => {
    handleSetField('amount', selectedCurrency.balance);
    setFormValue(selectedCurrency.balance);

    if (selectedType.name_method === 'payment agent') {
      setTimeout(() => {
        handleAmountChange(e, selectedCurrency.balance, handleSetField);
      }, 0);
    }

    validateField('amount');
  };

  useEffect(() => {
    if (!agree) {
      setTimeout(() => {
        setAgentFee(0);
        setTotalAmount(0);
      }, 0);
    }
  }, [agree]);

  useEffect(() => {
    if (selectedType) setCurrentAssetFee(selectedType.fee);

    if (
      selectedType &&
      selectedAgent &&
      selectedType.name_method === 'payment agent'
    ) {
      // setAgentFee(
      //   formValue ? formValue * (selectedAgent.commission_rate / 100) : 0,
      // );
      setAgentFee(formValue ? selectedAgent.commission_rate : 0);

      if (formValue) {
        dispatch({
          type: types.CALCULATE_PAYMENT_AGENT_COMMISSION_START,
          payload: {
            amount: formValue,
            asset_id: selectedCurrency?.assetID,
            id: paymentAgentUserId,
            type: 'withdraw_fee',
          },
        });
      }
    } else {
      setAgentFee(0);
    }
  }, [selectedType, selectedAgent]);

  useEffect(() => {
    if (selectedCurrency && assetPayments && selectedCurrency?.assetID) {
      const withdraw = assetPayments[selectedCurrency?.assetID]?.withdrawal;
      setAllPaymentTypes(withdraw);
    }
  }, [selectedCurrency, assetPayments]);

  useEffect(() => {
    if (location?.state && location?.state?.item) {
      setSelectedCurrency(location?.state?.item);
    }
  }, [location?.state]);

  useEffect(() => {
    if (
      paymentLink &&
      paymentLink instanceof Object &&
      selectedType?.name_method === 'DafriBank ePay'
    ) {
      const form = document.querySelector('#dafriform');
      if (form) form.submit();
    }
  }, [paymentLink]);

  useEffect(() => {
    if (paymentAgentCommission) {
      setAgentFee(paymentAgentCommission?.withdraw?.fee_payment_agent_percent);
    } else {
      setAgentFee(0);
    }
  }, [paymentAgentCommission]);

  useEffect(() => {
    setTotalAmount(getTotalAmount(formValue, currentAssetFee, agentFee));
  }, [selectedType, agentFee, formValue, currentAssetFee, selectedAgent]);

  useEffect(() => {
    if (mobileData) {
      const { amount, paymentType, assetId } = mobileData;

      switch (paymentType) {
        case 'dafribank':
          openModal(() => (
            <DafriBankModalWithdraw
              formData={{
                amount,
                asset_id: assetId,
                payment_type: 'withdraw',
              }}
            />
          ));
          break;

        default:
          return true;
      }
    }
  }, []);

  // Dafribank check form mobile
  const [dafriFormEndabled, setDafriFormEnabled] = useState(false);

  useEffect(() => {
    if (mobileData && paymentLink && dafriFormEndabled) {
      const form = document.querySelector('#dafriform');
      form.submit();
    }
  }, [dafriFormEndabled, paymentLink]);

  return (
    <>
      <SupportedCurrency
        labels={fiatLabels}
        data={fiatData}
        title={L.translate('Pages.Users.Withdraw.Fiat.item1')}
        activeEl={selectedCurrency?.assetID}
        onSelectItem={handleCurrencySelect}
      />

      <div className="transfer-block">
        <p className="item-title item-title--bigger my-balance__title">
          {L.translate('Pages.Users.Withdraw.Fiat.item2')}
        </p>

        <CopyToClipboard
          adress={referenceNumber}
          copyMessage={L.translate('Pages.Users.Withdraw.Fiat.item3')}
        />

        <PaymentMethods
          paymentTypes={allPaymentTypes}
          onSelect={handleSelectPaymentType}
          selectedMethod={selectedType}
        />

        {selectedType?.name_method === 'payment agent' && (
          <PaymentAgent
            selectedPaymentAgent={selectedAgent}
            handleSelectedPaymentAgent={setSelectedAgent}
            type="withdrawal"
          />
        )}
      </div>

      <TransferCheck
        text="I understand the"
        onChange={handleToggleAgree}
        checked={agree}
        isFiat
      />

      {agree && selectedCurrency && selectedType && (
        <>
          {!user?.user_data?.sumsub && <TransferLimit amount={withdrawal24} />}

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({
              resetForm,
              values,
              setFieldValue,
              validateField,
              ...formik
            }) => (
              <Form className="transfer-form">
                <div className="transfer-form__field">
                  <Field
                    type="text"
                    name="amount"
                    className="input input--big input--type2 input--with-currency"
                    placeholder={L.translate('Pages.Users.Withdraw.Fiat.item4')}
                    textCurrency={selectedCurrency?.code?.toUpperCase()}
                    component={
                      selectedType?.name_method === 'payment agent'
                        ? DebounceFormikInput
                        : InputWithOnChange
                    }
                    isShowMaxButton
                    setMaxCallback={e =>
                      handleSetMaxSum(e, setFieldValue, validateField)
                    }
                    validate={requiredPositiveNumber}
                    handleAmountChange={handleAmountChange}
                    setFieldValue={setFieldValue}
                    debounceRef={debounceInputRef}
                    value={values.amount}
                    onChange={e => {
                      handleChangeAmount(e, setFieldValue, validateField);
                      setFormValue(e.target.value);
                    }}
                  />
                </div>
                <div className="transfer-details">
                  <button
                    className="button button--big  button--big--round button--wide-width"
                    type="submit"
                    disabled={
                      !values.amount || !(values.amount > 0) ? 'disabled' : null
                    }
                  >
                    {selectedType?.name_method === 'DafriBank ePay'
                      ? 'Submit withdraw'
                      : L.translate('Pages.Users.Withdraw.Fiat.item5')}
                  </button>

                  <div className="transfer-details__total">
                    <div className="transfer-detail">
                      <p className="transfer-detail__name">
                        {L.translate('Pages.Users.Withdraw.Fiat.item6')}
                      </p>
                      <p className="transfer-detail__value">
                        {currentAssetFee || 0} %
                      </p>
                    </div>

                    {selectedType?.name_method === 'payment agent' && (
                      <div className="transfer-detail">
                        <p className="transfer-detail__name">
                          Payment Agent Commission
                        </p>
                        <p className="transfer-detail__value">{agentFee} %</p>
                      </div>
                    )}

                    <div className="transfer-detail">
                      <p className="transfer-detail__name">
                        {L.translate('Pages.Users.Withdraw.Fiat.item7')}
                      </p>
                      <p className="transfer-detail__value">{totalAmount}</p>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}

      {paymentLink && (
        <DafriPayForm
          type="withdraw"
          target={!mobileData}
          formData={paymentLink}
          onLoadCallback={setDafriFormEnabled}
        />
      )}
    </>
  );
};

export default WithdrawalFiat;
