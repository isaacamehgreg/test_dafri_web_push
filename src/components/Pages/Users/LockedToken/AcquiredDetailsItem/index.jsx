import React from 'react';
import L from 'i18n-react';
import { toCrop, transformData } from '../../../../../services/helpers';
import { InProgressIcon, LockedIcon, SuccessIcon } from '../StatusIcons';

const AcquiredDetailsItem = ({
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
          {L.translate('Pages.Users.LockedToken.AcquiredDetailsItem.item1')}
        </div>
        <p className="table-value">
          {L.translate('Pages.Users.LockedToken.AcquiredDetailsItem.item2')}{' '}
          {transformData(start_date, 'M')}
        </p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.LockedToken.AcquiredDetailsItem.item3')} DBA
        </div>
        <p className="table-value">{amount_DBA} DBA</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.LockedToken.AcquiredDetailsItem.item4')} ${' '}
        </div>
        <p className="table-value">${toCrop(8)(price)}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.LockedToken.AcquiredDetailsItem.item5')}
        </div>
        {status === 'completed' && <SuccessIcon status={status} />}
        {status === 'in progress' && <InProgressIcon status={status} />}
        {status === 'locked' && <LockedIcon status={status} />}
      </div>
    </div>
  );
};

export default AcquiredDetailsItem;
