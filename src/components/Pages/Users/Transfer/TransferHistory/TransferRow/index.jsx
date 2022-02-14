import React from 'react';
import L from 'i18n-react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { referenceNumberSelector } from '../../../../../../redux/auth/selectors';

const TransferRow = ({
  created_at,
  exchange_amount,
  asset,
  from_asset_code,
  to_asset_code,
  amount_fee,
  exchange_fee,
}) => {
  const refNumber = useSelector(referenceNumberSelector);
  const dates = new Date(created_at * 1000);
  const date = moment(dates).format('YYYY/MM/DD HH:mm:ss');

  return (
    <div className="tr">
      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Transfer.TransferHistory.TransferRow.item1',
          )}
        </div>
        <p className="table-value">{refNumber}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Transfer.TransferHistory.TransferRow.item2',
          )}
        </div>
        <p className="table-value">{date}</p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Transfer.TransferHistory.TransferRow.item3',
          )}
        </div>
        <p className="table-status">
          {from_asset_code?.toUpperCase()}/{to_asset_code?.toUpperCase()}
        </p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Transfer.TransferHistory.TransferRow.item4',
          )}
        </div>
        <p className="table-value">
          {exchange_amount} {asset?.code?.toUpperCase()}
        </p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.Transfer.TransferHistory.TransferRow.item5',
          )}
        </div>
        <p className="table-value">
          {amount_fee} {exchange_fee}
        </p>
      </div>
    </div>
  );
};

export default TransferRow;
