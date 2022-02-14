import React from 'react';
import L from 'i18n-react';
import { toCrop, transformData } from '../../../../../services/helpers';

const AcquiredHistoryItem = ({
  idx,
  amount_DBA,
  price,
  start_date,
  status,
}) => {
  return (
    <div className="tr">
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.LockedToken.AcquiredHistoryItem.item1')}
        </div>
        <p className="table-value">
          {L.translate('Pages.Users.LockedToken.AcquiredHistoryItem.item1')}{' '}
          {transformData(start_date, 'M')}
        </p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.LockedToken.AcquiredHistoryItem.item2')} DBA
        </div>
        <p className="table-value">{amount_DBA} DBA</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.LockedToken.AcquiredHistoryItem.item3')} $
        </div>
        <p className="table-value">${toCrop(8)(price)}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.LockedToken.AcquiredHistoryItem.item4')}
        </div>
        <p className="table-value">{transformData(start_date, 'MM/DD/YYYY')}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.LockedToken.AcquiredHistoryItem.item5')}
        </div>
        <p className="table-status table-status--success">{status}</p>
      </div>
    </div>
  );
};

export default AcquiredHistoryItem;
