import React from 'react';
import L from 'i18n-react';

const QrCode = ({ data }) => {
  return (
    <div className="transfer-qr">
      <div className="transfer-qr__text">
        <p>{L.translate('Pages.Users.Deposit.QrCode.item1')}</p>

        <p>{L.translate('Pages.Users.Deposit.QrCode.item2')}</p>
      </div>

      <div className="transfer-qr__item">
        <img src={data} alt="" />
      </div>
    </div>
  );
};

export default QrCode;
