import React, { useEffect, useRef, useState } from 'react';
import L from 'i18n-react';
import classNames from 'classnames';
import BankPaymentMethod from '../BankPaymentMethod';
import FiatPaymentMethod from '../FiatPaymentMethod';
// images
import method1 from '../../../../../styles/img/method1.png';
import arrowDown from '../../../../../styles/img/arrow-down.svg';

const PaymentMethods = ({ paymentTypes, onSelect, selectedMethod }) => {
  // Filtered logic
  const [filteredBanks, setFilteredBanks] = useState([]);
  const [filteredAnotherPaymentMethods, setFilteredAnotherPaymentMethods] =
    useState([]);

  // Dropdown logic
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSetDropdown = () => {
    if (dropdown) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const handleOutsideClick = e => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      dropdownRef.current.classList.contains('bank')
    ) {
      setDropdown(false);
    }
  };

  // Select bank method logic
  const getSelectedMethod = () => {
    let result;

    if (selectedMethod) {
      const name = selectedMethod?.name_method;

      if (name === null) {
        result = 'bank';
      } else if (
        name === 'ozow' ||
        name === 'payment agent' ||
        name === 'visa_mastercard' ||
        name === 'DafriBank ePay'
      ) {
        result = name;
      } else {
        result = false;
      }
    }

    return result;
  };

  const nameOfSelectedMethod = getSelectedMethod();

  const bankMethodClasses = classNames('method bank', {
    active: dropdown,
    selected: nameOfSelectedMethod === 'bank',
  });

  // onSelect interceptor
  const onSelectInterceptor = item => {
    setDropdown(false);
    onSelect(item);
  };

  // Dropdown useEffect
  useEffect(() => {
    getSelectedMethod();
    document.body.addEventListener('click', handleOutsideClick, true);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  // Filtered useEffect
  useEffect(() => {
    if (paymentTypes) {
      const banks = paymentTypes?.filter(method => method.name_method === null);

      const anotherMethods = paymentTypes?.filter(
        method => method.name_method !== null,
      );

      setFilteredBanks(banks);
      setFilteredAnotherPaymentMethods(anotherMethods);
    }
  }, [paymentTypes]);

  return (
    <>
      {paymentTypes && (
        <div className="transfer-block">
          <p className="item-title item-title--bigger my-balance__title">
            {L.translate('Pages.Users.Deposit.PaymentMethods.item1')}
          </p>

          <div className="methods-row">
            {filteredBanks && !!filteredBanks.length && (
              <div className="methods-col">
                <div
                  className={bankMethodClasses}
                  ref={dropdownRef}
                  onClick={handleSetDropdown}
                >
                  <div className="method-item">
                    <div className="method-item__logo">
                      <img
                        src={
                          selectedMethod?.manual_bank?.bank_name
                            ? selectedMethod?.img_path
                            : method1
                        }
                        alt=""
                      />
                    </div>

                    <button className="method-btn">
                      {selectedMethod?.manual_bank?.bank_name ||
                        L.translate('Pages.Users.Deposit.PaymentMethods.item2')}
                      <span className="d-flex method-btn__arrow">
                        <img src={arrowDown} alt="" />
                      </span>
                    </button>
                  </div>

                  {dropdown && (
                    <div className="method-drop">
                      <div className="method-drop__inner">
                        {filteredBanks.map(bank => (
                          <BankPaymentMethod
                            key={bank.id}
                            onSelect={onSelectInterceptor}
                            {...bank}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {!!filteredAnotherPaymentMethods.length &&
              filteredAnotherPaymentMethods.map(method => (
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
