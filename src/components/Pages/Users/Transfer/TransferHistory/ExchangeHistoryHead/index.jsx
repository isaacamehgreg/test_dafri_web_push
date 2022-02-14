import React from 'react';
import L from 'i18n-react';

const TableHistoryHead = () => {
  return (
    <div className="table-header">
      <div className="tr">
        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.Transfer.TransferHistory.ExchangeHistoryHead.item1',
            )}
          </div>
        </div>

        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.Transfer.TransferHistory.ExchangeHistoryHead.item2',
            )}
          </div>
        </div>

        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.Transfer.TransferHistory.ExchangeHistoryHead.item3',
            )}
          </div>
        </div>

        <div className="td">
          <div className="td-name">
            {L.translate(
              'Pages.Users.Transfer.TransferHistory.ExchangeHistoryHead.item4',
            )}
          </div>
        </div>

        <div className="td ">
          <div className="td-name">
            {L.translate(
              'Pages.Users.Transfer.TransferHistory.ExchangeHistoryHead.item5',
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHistoryHead;
