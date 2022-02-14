import React from 'react';

const DropDownAddresses = ({
  data,
  address,
  index,
  setFieldValue,
  handleSelectAddressItem,
  addressesStyles,
}) => {
  const checkedStyle = () => {
    switch (true) {
      case index === 0 && data?.length !== 1:
        return addressesStyles.addressFirstItemStyle;
      case index === data?.length - 1 && data?.length !== 1:
        return addressesStyles.addressLastItemStyle;
      case data?.length === 1:
        return null;

      default:
        return addressesStyles.addressItemStyle;
    }
  };

  return (
    <div className="method-item" style={checkedStyle()}>
      <button
        className="method-btn"
        type="button"
        data-address={address?.address}
        onClick={e => handleSelectAddressItem(e, setFieldValue)}
      >
        {address?.address}
      </button>
    </div>
  );
};

export default DropDownAddresses;
