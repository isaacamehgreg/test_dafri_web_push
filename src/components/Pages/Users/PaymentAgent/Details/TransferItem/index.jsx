import React from 'react';
import L from 'i18n-react';
import classNames from 'classnames';
import moment from 'moment';

const TransferItem = props => {
  const {
    amount,
    asset,
    fee_payment_agent_percent,
    reference_number,
    operation_type,
    operation_status,
    created_at,
  } = props;
  const [date, time] = moment(new Date(created_at * 1000)).isValid()
    ? moment(new Date(created_at * 1000))
        .format('YYYY/MM/DD HH:mm:ss')
        .split(' ')
    : ['', ''];

  const typeClass = classNames('table-status', {
    'table-status--deposit': operation_type === 'deposit',
    'table-status--withdraw': operation_type === 'withdrawal',
  });

  const statusClass = classNames('table-status', {
    'table-status--active': operation_status === 'confirmed',
    'table-status--inprogress': operation_status === 'waiting',
    'table-status--error': operation_status === 'rejected',
  });

  return (
    <div className="tr">
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.TransferItem.item1')}
        </div>
        <p>
          {date} <br />
          {time}
        </p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.TransferItem.item2')}
        </div>
        <div className="table-coin">
          <div className="table-coin__icon">
            <img src={asset?.img_path} alt="" />
          </div>
          <p className="table-coin__name">{asset?.code?.toUpperCase()}</p>
        </div>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.TransferItem.item3')}
        </div>
        <p className={typeClass}>{operation_type}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.TransferItem.item4')}
        </div>
        <p>{amount}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.TransferItem.item5')} №
        </div>
        <p>{reference_number}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.TransferItem.item6')}
        </div>
        <p>{fee_payment_agent_percent}%</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.TransferItem.item7')}
        </div>
        <p className={statusClass}>{operation_status}</p>
      </div>
    </div>
  );
};

export default TransferItem;
