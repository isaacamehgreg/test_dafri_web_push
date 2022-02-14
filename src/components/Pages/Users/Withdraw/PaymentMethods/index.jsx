import React, { useEffect } from 'react';
import L from 'i18n-react';
import FiatPaymentMethod from '../FiatPaymentMethod';

const PaymentMethods = ({ paymentTypes, onSelect, selectedMethod }) => {
  // Select bank method logic
  const getSelectedMethod = () => {
    let result;

    if (selectedMethod) {
      const name = selectedMethod?.name_method;

      if (name) {
        result = name;
      } else {
        result = false;
      }
    }

    return result;
  };

  const nameOfSelectedMethod = getSelectedMethod();

  // onSelect interceptor
  const onSelectInterceptor = item => {
    onSelect(item);
  };

  // Fropdown useEffect
  useEffect(() => {
    getSelectedMethod();
  }, []);

  return (
    <>
      {paymentTypes && (
        <div className="transfer-block">
          <p className="item-title item-title--bigger my-balance__title">
            {L.translate('Pages.Users.Withdraw.PaymentMethods.item1')}
          </p>

          <div className="methods-row">
            {!!paymentTypes.length &&
              paymentTypes.map(method => (
                <FiatPaymentMethod
                  key={method.id}
                  onClick={onSelectInterceptor}
                  selectedMethod={nameOfSelectedMethod}
                  {...method}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentMethods;
