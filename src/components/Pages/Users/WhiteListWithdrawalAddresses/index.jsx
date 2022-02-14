import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import types from '../../../../redux/types';
import {
  walletSelector,
  whitelistAddressesSelector,
} from '../../../../redux/wallets/selectors';
import notification from '../../../../services/notification';
import DescriptionBlock from './DescriptionBlock';
import WithdrawalAddressesItem from './WithdrawalAddressesItem';
import TableHeader from './TableHeader';
import BackButton from './BackButton';

const addAddresssesDataFields = data =>
  data?.map(el => ({
    ...el,
    error: false,
    addresses: el.addresses.map(item => ({
      ...item,
      isValid: true,
      id: item?.id ? item?.id : uuidv4(),
    })),
  }));

const WhiteListWithdrawalAddresses = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const whitelistAddresses = useSelector(whitelistAddressesSelector);
  const wallets = useSelector(walletSelector);

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (whitelistAddresses?.data?.length) {
      const dataWithFileds = addAddresssesDataFields(whitelistAddresses?.data);

      setData(dataWithFileds);
    }
  }, [whitelistAddresses]);

  useEffect(() => {
    const dataWithFileds = addAddresssesDataFields(whitelistAddresses?.data);

    const filteredTrnasformData = dataWithFileds?.filter(el =>
      el.currency.toLowerCase().includes(search.toLowerCase()),
    );

    setData(filteredTrnasformData);
  }, [search]);

  const handleAddFormItems = id => {
    const form = {
      tag: null,
      address: '',
      isValid: true,
      id: uuidv4(),
    };

    setData(
      data.map(el =>
        el.id === id
          ? {
              ...el,
              addresses: [...el.addresses, form],
            }
          : el,
      ),
    );
  };

  const handleRemoveFormItems = (addressId, fieldId) => {
    setData(
      data.map(el =>
        el.id === addressId
          ? {
              ...el,
              addresses: el.addresses.filter(item => item?.id !== fieldId),
            }
          : el,
      ),
    );
  };

  const checkUserValidAddress = (target, addressId, fieldId) => {
    const item = data.find(el => el.id === addressId);
    dispatch({
      type: types.CHECK_USER_VALID_ADDRESS_START,
      payload: {
        asset_code: item.asset_code,
        address: target.value,
      },
      setData,
      result: data,
      fieldId,
    });
  };

  const handleFormChange = ({ target }, addressId, fieldId) => {
    setData(
      data.map(el =>
        el.id === addressId
          ? {
              ...el,
              addresses: el.addresses.map(item =>
                fieldId === item?.id
                  ? { ...item, [target.name]: target.value }
                  : item,
              ),
            }
          : el,
      ),
    );

    if (target.value && target.name === 'address') {
      checkUserValidAddress(target, addressId, fieldId);
      return;
    }

    setData(
      data.map(el =>
        el.id === addressId
          ? {
              ...el,
              error: false,
              addresses: el.addresses.map(item =>
                item?.id === fieldId
                  ? { ...item, [target.name]: target.value, isValid: true }
                  : item,
              ),
            }
          : el,
      ),
    );
  };

  const handleUpdateAddresses = id => {
    const item = data.find(el => el.id === id);
    // debugger;
    const isNullebleAddresses = item?.addresses?.some(
      ({ address }) => !address && !item.disabled_at,
    );

    if (isNullebleAddresses) {
      notification({
        type: 'error',
        title: 'Security',
        message: 'Error. Please fill in the address field or delete it.',
      });
      return;
    }

    dispatch({
      type: types.UPDATE_WITHDRAW_WHITELIST_ADDRESSES_START,
      payload: {
        balance_id: item.id,
        active: Number(!item.disabled_at),
        addresses: item.addresses,
      },
    });
  };

  const handleBackClick = () => {
    history.goBack();
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleDisabledAddress = ({ target }) => {
    setData(
      data.map(el =>
        el.asset_code === target.name
          ? { ...el, disabled_at: !el.disabled_at }
          : el,
      ),
    );
  };

  const hasWithdrawalTag = code =>
    wallets?.walletsList?.length &&
    wallets?.walletsList?.find(wallet => wallet?.asset?.code === code)
      ?.has_withdrawal_tag;

  return (
    <section className="page-section">
      <div className="custom-container">
        <div className="security-box">
          <BackButton handleBack={handleBackClick} />
          <div className="security-content">
            <p className="item-title">
              {L.translate('Pages.Users.WhiteListWithdrawalAddresses.item1')}
            </p>
            <div className="security-content__inner">
              <DescriptionBlock />
              <div className="security-filter">
                <div className="security-filter__coin">
                  <div className="field-wrap">
                    <input
                      type="text"
                      className="input"
                      placeholder="Filter by currency"
                      value={search}
                      onChange={handleSearch}
                    />
                  </div>
                </div>
              </div>
              <div className="whitelist-table">
                <div className="whitelist-table__top">
                  <div className="table table--type2 table--withdraw-whitelist">
                    <TableHeader />
                  </div>
                </div>
                <div className="whitelist-table__body">
                  <div className="table table--type2 table--withdraw-whitelist">
                    <div className="table-body">
                      {data?.length
                        ? data?.map(address => (
                            <WithdrawalAddressesItem
                              key={address?.id}
                              address={address}
                              data={data}
                              handleDisabledAddress={handleDisabledAddress}
                              handleFormChange={handleFormChange}
                              hasWithdrawalTag={hasWithdrawalTag}
                              handleAddFormItems={handleAddFormItems}
                              handleRemoveFormItems={handleRemoveFormItems}
                              handleUpdateAddresses={handleUpdateAddresses}
                            />
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhiteListWithdrawalAddresses);
