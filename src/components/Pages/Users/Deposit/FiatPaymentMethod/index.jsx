import React from 'react';

const FiatPaymentMethod = props => {
  const { img_path, name_method, selectedMethod, onClick } = props;

  return (
    <div className="methods-col">
      <div
        className={`method ${selectedMethod === name_method ? 'selected' : ''}`}
      >
        <div className="method-item" onClick={() => onClick(props)}>
          <div className="method-item__logo">
            <img src={img_path} alt="" />
          </div>

          <button className="method-btn" type="button">
            {name_method.split('_').join(' | ').toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiatPaymentMethod;
