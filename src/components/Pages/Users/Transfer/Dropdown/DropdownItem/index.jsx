import React from 'react';

const DropdownItem = ({ asset, onSelectCurrency }) => {
  return (
    <div
      className="method-item"
      onClick={() => onSelectCurrency(asset)}
      role="presentation"
    >
      <button className="method-btn">
        <span className="d-flex method-btn__icon">
          <img src={asset?.img_path} alt="" />
        </span>
        {asset?.code?.toUpperCase() || 'qweqweq'}
      </button>
    </div>
  );
};

export default DropdownItem;
