import React from 'react';
import L from 'i18n-react';
import { InputSwitch } from '../../../../Base/FormControls';
import AddressFieldItem from '../AddressFieldItem';
import FieldWithDisabledDate from '../FieldWithDisabledDate';

const WithdrawalAddressesItem = ({
  data,
  address,
  handleDisabledAddress,
  handleFormChange,
  hasWithdrawalTag,
  handleAddFormItems,
  handleRemoveFormItems,
  handleUpdateAddresses,
}) => {
  const disabledError = data?.find(
    el => el?.asset_code === address?.asset_code,
  )?.error;

  return (
    <div className="tr" key={address?.id}>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.WhiteListWithdrawalAddresses.WithdrawalAddressesItem.item1',
          )}
        </div>
        <p>{address?.currency}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.WhiteListWithdrawalAddresses.WithdrawalAddressesItem.item2',
          )}
        </div>
        <div className="page-switch">
          <p>off</p>
          <InputSwitch
            labelFor={address?.asset_code}
            id={address?.asset_code}
            name={address?.asset_code}
            checked={!address?.disabled_at}
            onChange={handleDisabledAddress}
          />
          <p>on</p>
        </div>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.WhiteListWithdrawalAddresses.WithdrawalAddressesItem.item3',
          )}
        </div>

        <div className="full-td-content">
          {!!address.addresses.length && !address?.disabled_at ? (
            address.addresses.map((el, idx) => (
              <AddressFieldItem
                key={el?.id}
                item={el}
                idx={idx}
                address={address}
                handleFormChange={handleFormChange}
                hasWithdrawalTag={hasWithdrawalTag}
                handleAddFormItems={handleAddFormItems}
                handleRemoveFormItems={handleRemoveFormItems}
              />
            ))
          ) : (
            <FieldWithDisabledDate address={address} />
          )}
        </div>
      </div>
      <div className="td td--center">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.WhiteListWithdrawalAddresses.WithdrawalAddressesItem.item4',
          )}
        </div>
        <div className="table-action">
          <button
            className="button button--type3 button--small button--small-width"
            onClick={() => handleUpdateAddresses(address?.id)}
            disabled={disabledError}
            type="button"
          >
            {L.translate(
              'Pages.Users.WhiteListWithdrawalAddresses.WithdrawalAddressesItem.item5',
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalAddressesItem;
