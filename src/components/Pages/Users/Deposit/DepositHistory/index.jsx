import React, { useRef } from 'react';
import L from 'i18n-react';
import DepositCryptoHistory from './DepositCryptoHistory';
import DepositFiatHistory from './DepositFiatHistory';
import TableHistoryHead from '../../TableHistoryHead';

const DepositHistory = ({ isActive }) => {
  const tableID = isActive
    ? 'deposit-fiat-history-component-table-box'
    : 'deposit-crypto-history-component-table-box';

  return (
    <div className="transfer-box">
      <div className="transfer-box__content">
        <div className="transfer-history">
          <p className="item-title item-title--bigger">
            {L.translate('Pages.Users.Deposit.DepositHistory.item1')}
          </p>

          <div className="table-box" id={tableID}>
            <div className="table table--transfer-history">
              <TableHistoryHead refTable={tableID} />

              {!isActive ? (
                <DepositFiatHistory refTable={tableID} />
              ) : (
                <DepositCryptoHistory refTable={tableID} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositHistory;
