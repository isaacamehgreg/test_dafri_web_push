import React from 'react';

import method1 from '../../../../../styles/img/method1.png';

const FiatPaymentMethod = props => {
  const { img_path, name_method, selectedMethod, onClick } = props;

  return (
    <div className="methods-col">
      <div
        className={`method ${selectedMethod === name_method ? 'selected' : ''}`}
      >
        <div
          className="method-item"
          onClick={() => onClick(props)}
          role="presentation"
        >
          <div className="method-item__logo">
            <img
              src={name_method === 'manual withdrawal' ? method1 : img_path}
              alt=""
            />
          </div>

          <button className="method-btn" type="button">
            {name_method.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiatPaymentMethod;
