import React, { useEffect, useRef, useState } from 'react';
import L from 'i18n-react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { DebounceInput } from 'react-debounce-input';
import SupportedCurrency from '../SupportedCurrency';
import TransferNetwork from '../TransferNetwork';
import { Input } from '../../../../Base/FormControls';
import { openModal } from '../../../../Base/Modal';
import SecurityChecked from '../../../../Base/Modals/Users/Withdraw/SecurityChecked';
import { requiredValue } from '../../../../../services/validators';
import types from '../../../../../redux/types';
import { whitelistAddressesSelector } from '../../../../../redux/wallets/selectors';

import arrowDownIcon from '../../../../../styles/img/arrow-down.svg';
import DropDownAddresses from '../DropDownAddresses';
import { settingsSelector } from '../../../../../redux/users/settings/selectors';

const cryptoLabels = ['Coin', 'Total', 'Available', 'Locked'];

const addressesStyles = {
  arrowButtonStyle: {
    position: 'absolute',
    right: '30px',
    top: 0,
    bottom: 0,
  },
  addressListStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    filter: 'drop-shadow(0 8px 20px rgba(133, 132, 136, .3))',
  },
  addressItemStyle: {
    borderRadius: '0',
  },
  addressFirstItemStyle: {
    borderTopRightRadius: '40px',
    borderTopLeftRadius: '40px',
    borderBottomRightRadius: '0',
    borderBottomLeftRadius: '0',
  },
  addressLastItemStyle: {
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
    borderBottomRightRadius: '40px',
    borderBottomLeftRadius: '40px',
  },
};

const WithdrawCrypto = ({ isLoading, cryptoData, location }) => {
  const dispatch = useDispatch();
  const whitelistAddresses = useSelector(whitelistAddressesSelector);
  const settingsData = useSelector(settingsSelector);

  const [selectedItem, setSelectedItem] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [itemAddresesList, setItemAddresesList] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [networkId, setNetworkId] = useState(null);

  const checkBoxRef = useRef();
  const dropdownRef = useRef(null);

  const initialValues = {
    address: '',
    amount: '',
  };

  const withdrawalWhiteListEnabled =
    !!settingsData.data?.withdrawal_white_list_enabled;

  const showArrowIcon =
    withdrawalWhiteListEnabled &&
    itemAddresesList?.length &&
    itemAddresesList?.length >= 1 &&
    itemAddresesList[0]?.address;

  const showAddressesList =
    withdrawalWhiteListEnabled &&
    itemAddresesList?.length &&
    itemAddresesList?.length >= 1;

  const handleOutsideClick = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);

      setSelectedItem(null);
    };
  }, []);

  const startScroll = () =>
    checkBoxRef?.current?.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });

  const handleSelect = item => {
    setSelectedItem(item);
    setNetworkId(item?.networks[0]?.network_id);
    setIsValid(true);
  };

  const formRef = useRef(null);

  useEffect(() => {
    if (selectedItem && selectedItem?.type !== 'fiat') startScroll();

    if (formRef.current) {
      formRef.current.resetForm();
    }
  }, [selectedItem]);

  useEffect(() => {
    if (location?.state && location?.state?.item) {
      setSelectedItem(location?.state?.item);
    }
  }, [location?.state]);

  useEffect(() => {
    if (whitelistAddresses?.data?.length) {
      const currentAddresses = whitelistAddresses?.data?.find(
        address => address?.asset_code === selectedItem?.code,
      );

      setItemAddresesList(currentAddresses?.addresses);
    }
  }, [whitelistAddresses, selectedItem]);

  const onSubmit = (values, { resetForm }) => {
    openModal(() => (
      <SecurityChecked
        type="crypto"
        data={{
          ...values,
          wallet_id: selectedItem?.id,
          // network: selectedItem?.network,
          network: networkId,
        }}
        resetWithdrawFields={resetForm}
        assetCode={selectedItem?.code}
      />
    ));
  };

  const handleSetDropdown = () => setDropdown(!dropdown);

  const handleSelectAddressItem = (e, setValue) => {
    setValue('address', e.currentTarget.dataset.address);
    setDropdown(false);
  };

  const handleSetMaxSum = setFieldValue => {
    setFieldValue('amount', selectedItem.balance);
  };

  const handChangeleWalletAddress = ({ target }, setFieldValue) => {
    const value = target?.value;

    setFieldValue('address', value);

    if (!value) {
      return;
    }
    dispatch({
      type: types.CHECK_USER_VALID_ADDRESS_START,
      payload: {
        asset_code: selectedItem?.code,
        address: target.value,
        network: networkId,
      },
      setIsValid,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      innerRef={formRef}
    >
      {({ setFieldValue, resetForm, values, ...formik }) => (
        <>
          <SupportedCurrency
            isLoading={isLoading}
            title={L.translate('Pages.Users.Withdraw.Crypto.item1')}
            labels={cryptoLabels}
            data={cryptoData}
            activeEl={selectedItem?.assetID}
            onSelectItem={handleSelect}
            setFieldValue={setFieldValue}
          />
          {selectedItem ? (
            <>
              <div className="transfer-option" ref={checkBoxRef}>
                {selectedItem?.networks?.length && (
                  <TransferNetwork
                    {...selectedItem}
                    setNetworkId={setNetworkId}
                  />
                )}
              </div>
              <Form className="transfer-form">
                <div className="transfer-form__field">
                  <div
                    className={`method ${dropdown && 'active'}`}
                    ref={dropdownRef}
                  >
                    <div className="field-wrap">
                      <DebounceInput
                        type="text"
                        className="input input--big input--type2"
                        placeholder={L.translate(
                          'Pages.Users.Withdraw.Crypto.item2',
                        )}
                        name="address"
                        value={values.address}
                        debounceTimeout={500}
                        onChange={e =>
                          handChangeleWalletAddress(e, setFieldValue)
                        }
                        autoComplete="off"
                        disabled={showArrowIcon}
                        readOnly={showArrowIcon}
                      />
                      {showArrowIcon && (
                        <button
                          className="copy"
                          type="button"
                          style={addressesStyles.arrowButtonStyle}
                          onClick={handleSetDropdown}
                        >
                          <span className="d-flex copy__icon">
                            <img src={arrowDownIcon} alt="" />
                          </span>
                        </button>
                      )}
                    </div>
                    {dropdown ? (
                      <div style={addressesStyles.addressListStyle}>
                        {showAddressesList
                          ? itemAddresesList?.map((address, idx, arr) => (
                              <DropDownAddresses
                                key={uuidv4()}
                                data={arr}
                                address={address}
                                index={idx}
                                setFieldValue={setFieldValue}
                                handleSelectAddressItem={
                                  handleSelectAddressItem
                                }
                                addressesStyles={addressesStyles}
                              />
                            ))
                          : null}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="transfer-form-row">
                  <div className="transfer-form__field">
                    <div className="field-wrap">
                      <Field
                        type="number"
                        placeholder={L.translate(
                          'Pages.Users.Withdraw.Crypto.item3',
                        )}
                        className="input input--big input--type2 input--with-currency"
                        name="amount"
                        textCurrency={selectedItem?.code?.toUpperCase()}
                        component={Input}
                        validate={requiredValue}
                        isShowMaxButton
                        setMaxCallback={() => handleSetMaxSum(setFieldValue)}
                      />
                    </div>
                  </div>
                  <div className="transfer-form-row__btn">
                    <button
                      className="button button--big  button--big--round button--full"
                      type="submit"
                      disabled={
                        !isValid || !values.amount || !values.address
                          ? 'disabled'
                          : null
                      }
                    >
                      {L.translate('Pages.Users.Withdraw.Crypto.item4')}
                    </button>
                  </div>
                </div>
              </Form>
            </>
          ) : null}
        </>
      )}
    </Formik>
  );
};

export default WithdrawCrypto;
