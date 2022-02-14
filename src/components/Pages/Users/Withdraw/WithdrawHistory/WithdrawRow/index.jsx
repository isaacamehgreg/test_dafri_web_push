import React from 'react';
import L from 'i18n-react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { referenceNumberSelector } from '../../../../../../redux/auth/selectors';

const WithdrawRow = ({
  created_at,
  amount,
  status,
  fee,
  asset_code,
  asset_name,
}) => {
  const dates = new Date(created_at * 1000);
  const date = moment(dates).format('YYYY/MM/DD HH:mm:ss');
  const referenceNumber = useSelector(referenceNumberSelector);

  return (
    <div className="tr">
      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Withdraw.WithdrawHistory.WithdrawRow.item1',
          )}
        </div>
        <p className="table-value">{referenceNumber || '-'}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Withdraw.WithdrawHistory.WithdrawRow.item2',
          )}
        </div>
        <p className="table-value">{date}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Withdraw.WithdrawHistory.WithdrawRow.item3',
          )}
        </div>
        <p className="table-value">
          {amount}{' '}
          {asset_name ? asset_name?.toUpperCase() : asset_code?.toUpperCase()}
        </p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Withdraw.WithdrawHistory.WithdrawRow.item4',
          )}
        </div>
        <p className="table-status table-status--success">{status}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Withdraw.WithdrawHistory.WithdrawRow.item5',
          )}
        </div>
        <p className="table-value">{fee || '0'}</p>
      </div>
    </div>
  );
};

export default WithdrawRow;
