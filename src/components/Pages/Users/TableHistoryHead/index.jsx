import React from 'react';
import L from 'i18n-react';

const TableHistoryHead = ({ refTable }) => {
  return (
    <div className="table-header">
      <div
        className={`tr ${
          refTable === 'deposit-crypto-history-component-table-box' &&
          'grid-add-column'
        }`}
      >
        <div className="td">
          <div className="td-name">
            {L.translate('Pages.Users.TableHistoryHead.item1')}
          </div>
        </div>

        <div className="td">
          <div className="td-name">
            {L.translate('Pages.Users.TableHistoryHead.item2')}
          </div>
        </div>

        <div className="td">
          <div className="td-name">
            {L.translate('Pages.Users.TableHistoryHead.item3')}
          </div>
        </div>

        <div className="td">
          <div className="td-name">
            {L.translate('Pages.Users.TableHistoryHead.item4')}
          </div>
        </div>
        {refTable === 'deposit-crypto-history-component-table-box' && (
          <div className="td ">
            <div className="td-name">
              {L.translate('Pages.Users.TableHistoryHead.item6')}
            </div>
          </div>
        )}
        <div className="td ">
          <div className="td-name">
            {L.translate('Pages.Users.TableHistoryHead.item5')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHistoryHead;
