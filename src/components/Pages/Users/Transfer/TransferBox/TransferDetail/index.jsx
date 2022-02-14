import React from 'react';

const TransferDetail = ({ label, value, coin }) => {
  return (
    <div className="transfer-detail">
      <p className="transfer-detail__name">{label}</p>

      <p className="transfer-detail__value">
        {value || '0'} {coin?.toUpperCase()}
      </p>
    </div>
  );
};

export default TransferDetail;
