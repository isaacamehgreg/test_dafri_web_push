import React from 'react';
import TableHistoryHead from './ExchangeHistoryHead';
import TransferTableBody from './TransferTableBody';

const TransferHistory = () => {
  const id = 'transfer-history-component-table-box';

  return (
    <div className="transfer-box">
      <div className="transfer-box__content">
        <div className="transfer-history">
          <p className="item-title item-title--bigger">Exchange history</p>
          <div className="table-box" id={id}>
            <div className="table table--transfer-history">
              <TableHistoryHead />

              <TransferTableBody refTable={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferHistory;
