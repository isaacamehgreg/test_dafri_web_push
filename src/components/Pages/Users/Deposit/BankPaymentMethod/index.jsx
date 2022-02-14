import React from 'react';

const BankPaymentMethod = props => {
  const {
    manual_bank: { bank_name, country },
    img_path,
    onSelect,
  } = props;

  return (
    <div className="method-item" onClick={() => onSelect(props)}>
      <div className="method-item__logo">
        <img src={img_path} alt="" />
      </div>

      <button className="method-btn" type="button">
        {bank_name} {country}
      </button>
    </div>
  );
};

export default BankPaymentMethod;
