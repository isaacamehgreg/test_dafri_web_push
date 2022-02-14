import React from 'react';

const BankPaymentMethod = props => {
  const { image, text, onSelect } = props;

  return (
    <div
      className="method-item"
      onClick={() => onSelect(props)}
      role="presentation"
    >
      <div className="method-item__logo">
        <img src={image} alt="" />
      </div>

      <button className="method-btn" type="button">
        {text}
      </button>
    </div>
  );
};

export default BankPaymentMethod;
