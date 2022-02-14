import React from 'react';
import L from 'i18n-react';
import CopyToClipboard from '../CopyToClipboard';

const DepositAdress = ({ adress, copyMessage }) => {
  return (
    <div className="transfer-address-block">
      <p className="item-title item-title--bigger">
        {L.translate('Pages.Users.Deposit.DepositAdress.item1')}
      </p>

      <CopyToClipboard adress={adress} copyMessage={copyMessage} />
    </div>
  );
};

export default DepositAdress;
