import React from 'react';
import L from 'i18n-react';
import { transformData } from '../../../../../../services/helpers';

const HistoryItem = ({ referral }) => {
  return (
    <div className="tr">
      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Affiliate.CommissionHistory.HistoryItem.item1',
          )}
        </div>
        <p className="table-value">
          {referral?.amount} {referral?.asset_code?.toUpperCase()}
        </p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Affiliate.CommissionHistory.HistoryItem.item2',
          )}
        </div>
        <p>{referral?.commission_rate_percent} %</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Affiliate.CommissionHistory.HistoryItem.item3',
          )}
        </div>
        <p className="table-value">
          {transformData(referral?.updated_at, 'YYYY/MM/DD HH:MM:SS')}
        </p>
      </div>
    </div>
  );
};

export default HistoryItem;
