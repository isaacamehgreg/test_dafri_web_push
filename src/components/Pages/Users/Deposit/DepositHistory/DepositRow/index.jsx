import React from 'react';
import L from 'i18n-react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { referenceNumberSelector } from '../../../../../../redux/auth/selectors';

const DepositRow = ({
  created_at,
  amount,
  reference,
  asset,
  asset_name,
  status,
  amount_fee,
  type,
  fee,
}) => {
  const refNumber = useSelector(referenceNumberSelector);
  const dates = new Date(created_at * 1000);
  const date = moment(dates).format('YYYY/MM/DD HH:mm:ss');

  return (
    <div className={`tr ${type && 'grid-add-column'}`}>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.Deposit.DepositHistory.DepositRow.item1')}
        </div>
        <p className="table-value">{!type ? refNumber : reference}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.Deposit.DepositHistory.DepositRow.item2')}
        </div>
        <p className="table-value">{date}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.Deposit.DepositHistory.DepositRow.item3')}
        </div>
        <p className="table-value">
          {amount} {asset?.code?.toUpperCase()}
        </p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.Deposit.DepositHistory.DepositRow.item4')}
        </div>
        <p className="table-status table-status--success">
          {!type ? status : type}
        </p>
      </div>
      {type && (
        <div className="td">
          <p className="table-status table-status--success">{status}</p>
        </div>
      )}

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.Deposit.DepositHistory.DepositRow.item5')}
        </div>
        <p className="table-value">
          {amount_fee} {fee}
        </p>
      </div>
    </div>
  );
};

export default DepositRow;
