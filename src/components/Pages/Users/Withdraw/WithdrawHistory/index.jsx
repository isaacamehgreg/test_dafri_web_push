import React, { useRef } from 'react';
import L from 'i18n-react';
import HistoryCrypto from './HistoryCrypto';
import HistoryFiat from './HistoryFiat';
import TableHistoryHead from '../../TableHistoryHead';

const WithdrawHistory = ({ isActive }) => {
  const tableID = isActive
    ? 'withdrawal-fiat-history-component-table-box'
    : 'withdrawal-crypto-history-component-table-box';

  return (
    <div className="transfer-box">
      <div className="transfer-box__content">
        <div className="transfer-history">
          <p className="item-title item-title--bigger">
            {L.translate('Pages.Users.Withdraw.WithdrawHistory.item1')}
          </p>

          <div className="table-box" id={tableID}>
            <div className="table table--transfer-history">
              <TableHistoryHead />

              {!isActive ? (
                <HistoryFiat refTable={tableID} />
              ) : (
                <HistoryCrypto refTable={tableID} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawHistory;
