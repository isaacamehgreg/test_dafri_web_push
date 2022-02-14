import React from 'react';
import L from 'i18n-react';
import { DebounceInput } from 'react-debounce-input';
import MinusIcon from '../MinusIcon';
import PlusIcon from '../PlusIcon';

const AddressFieldItem = ({
  item,
  idx,
  address,
  handleFormChange,
  hasWithdrawalTag,
  handleAddFormItems,
  handleRemoveFormItems,
}) => {
  return (
    <div className="table-add-address">
      <div className="table-add-address__field">
        <div className="field-wrap">
          <DebounceInput
            type="text"
            className="input"
            placeholder={L.translate(
              'Pages.Users.WhiteListWithdrawalAddresses.AddressFieldItem.item1',
            )}
            name="address"
            value={item.address}
            debounceTimeout={500}
            onChange={e => handleFormChange(e, address?.id, item.id)}
            style={{
              borderColor: !item.isValid ? 'red' : '#D1D1D3',
            }}
          />
        </div>
        {hasWithdrawalTag(address?.asset_code) && (
          <div className="field-wrap">
            <input
              type="text"
              className="input"
              placeholder="Memo"
              name="tag"
              value={item.tag ? item.tag : ''}
              onChange={e => handleFormChange(e, address?.id, item.id)}
            />
          </div>
        )}
      </div>
      {idx === 0 ? (
        <button
          className="d-flex table-add-address__btn"
          onClick={() => handleAddFormItems(address?.id)}
        >
          <PlusIcon />
        </button>
      ) : (
        <button
          className="d-flex table-add-address__btn"
          onClick={() => handleRemoveFormItems(address?.id, item.id)}
        >
          <MinusIcon />
        </button>
      )}
    </div>
  );
};

export default AddressFieldItem;
