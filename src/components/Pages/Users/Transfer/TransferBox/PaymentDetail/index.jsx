import React from 'react';

const PaymentDetail = ({ img, quantity, code }) => {
  return (
    <div className="payment-detail">
      <p className="payment-detail__value"> {quantity}</p>

      <div className="table-coin">
        <div className="table-coin__icon">
          <img src={img} alt="" />
        </div>

        <p className="table-coin__name">{code?.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default PaymentDetail;
