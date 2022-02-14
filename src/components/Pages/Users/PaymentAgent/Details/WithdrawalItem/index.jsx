import classNames from 'classnames';
import moment from 'moment';
import React from 'react';
import L from 'i18n-react';
import { openModal } from '../../../../../Base/Modal';
import PaymentAgentWithdraw from '../../../../../Base/Modals/Users/PaymentAgentWithdraw';
import PaymentAgentWithdrawInfo from '../../../../../Base/Modals/Users/PaymentAgentWithdrawInfo';

const WithdrawalItem = ({ item, pagination }) => {
  const [date, time] = moment(new Date(item?.created_at * 1000)).isValid()
    ? moment(new Date(item?.created_at * 1000))
        .format('YYYY/MM/DD HH:mm:ss')
        .split(' ')
    : ['', ''];
  const statusClass = classNames('table-status', {
    'table-status--active': item?.operation_status === 'confirmed',
    'table-status--inprogress': item?.operation_status === 'waiting',
    'table-status--error': item?.operation_status === 'rejected',
  });

  const handleUpdateWithdrawalStatus = () => {
    openModal(() => (
      <PaymentAgentWithdraw id={item?.id} pagination={pagination} />
    ));
  };

  const handleWithdrawalInfo = () => {
    openModal(() => <PaymentAgentWithdrawInfo data={item} />);
  };

  return (
    <div className="tr" key={item?.id}>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.WithdrawalItem.item1')}
        </div>
        <p>{item?.reference_number}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.WithdrawalItem.item2')}
        </div>
        <p>{item?.client?.email}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.WithdrawalItem.item3')}
        </div>
        <div className="table-coin">
          <p className="table-coin__name">{item?.asset?.code?.toUpperCase()}</p>
        </div>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.WithdrawalItem.item4')}
        </div>
        <p>{item?.amount}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.WithdrawalItem.item5')}
        </div>
        <p>
          {date} <br />
          {time}
        </p>
      </div>

      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.WithdrawalItem.item6')}
        </div>
        <p>{item?.fee_payment_agent}</p>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.WithdrawalItem.item7')}
        </div>
        <button className="link" type="button" onClick={handleWithdrawalInfo}>
          {L.translate('Pages.Users.PaymentAgent.Details.WithdrawalItem.item8')}
        </button>
      </div>
      <div className="td">
        <div className="td-hidden-name">
          {L.translate('Pages.Users.PaymentAgent.Details.WithdrawalItem.item9')}
        </div>
        <p className={statusClass}>{item?.operation_status}</p>
      </div>
      <div className="td td--center ">
        <div className="td-hidden-name">
          {L.translate(
            'Pages.Users.PaymentAgent.Details.WithdrawalItem.item10',
          )}
        </div>
        <div className="table-action">
          {item?.operation_status === 'waiting' ? (
            <button
              className="action-btn action-btn--confirm-type2"
              type="button"
              onClick={handleUpdateWithdrawalStatus}
            >
              <svg
                className="fill"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.707 0.292799C13.8946 0.480335 14 0.734654 14 0.999829C14 1.265 13.8946 1.51932 13.707 1.70686L5.6998 9.7072C5.51211 9.89468 5.25757 10 4.99217 10C4.72677 10 4.47223 9.89468 4.28454 9.7072L0.280963 5.70703C0.0986418 5.51842 -0.00224262 5.26581 3.78364e-05 5.0036C0.00231829 4.74139 0.107581 4.49057 0.293155 4.30515C0.478729 4.11974 0.729765 4.01456 0.992197 4.01228C1.25463 4.01001 1.50746 4.1108 1.69623 4.29297L4.99217 7.58611L12.2917 0.292799C12.4794 0.10532 12.7339 0 12.9993 0C13.2647 0 13.5193 0.10532 13.707 0.292799Z"
                  fill="#3DD598"
                />
              </svg>
            </button>
          ) : item?.operation_status === 'confirmed' ? (
            <p className="action-btn action-btn--confirm-type1">
              <svg
                className="fill"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.707 0.292799C13.8946 0.480335 14 0.734654 14 0.999829C14 1.265 13.8946 1.51932 13.707 1.70686L5.6998 9.7072C5.51211 9.89468 5.25757 10 4.99217 10C4.72677 10 4.47223 9.89468 4.28454 9.7072L0.280963 5.70703C0.0986418 5.51842 -0.00224262 5.26581 3.78364e-05 5.0036C0.00231829 4.74139 0.107581 4.49057 0.293155 4.30515C0.478729 4.11974 0.729765 4.01456 0.992197 4.01228C1.25463 4.01001 1.50746 4.1108 1.69623 4.29297L4.99217 7.58611L12.2917 0.292799C12.4794 0.10532 12.7339 0 12.9993 0C13.2647 0 13.5193 0.10532 13.707 0.292799Z"
                  fill="#3DD598"
                />
              </svg>
            </p>
          ) : (
            <p className="action-btn action-btn--reject">
              <svg
                className="fill"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.292492 0.305288C0.479831 0.117817 0.733884 0.0125018 0.998781 0.0125018C1.26368 0.0125018 1.51773 0.117817 1.70507 0.305288L5.99375 4.59829L10.2824 0.305288C10.3746 0.209778 10.4848 0.133596 10.6067 0.0811869C10.7286 0.0287779 10.8597 0.00119157 10.9923 3.77571e-05C11.125 -0.00111606 11.2565 0.0241854 11.3793 0.0744663C11.5021 0.124747 11.6136 0.199 11.7074 0.292893C11.8012 0.386786 11.8754 0.498438 11.9256 0.621334C11.9758 0.744231 12.0011 0.87591 12 1.00869C11.9988 1.14147 11.9713 1.27269 11.9189 1.39469C11.8665 1.5167 11.7904 1.62704 11.695 1.71929L7.40633 6.01229L11.695 10.3053C11.877 10.4939 11.9777 10.7465 11.9754 11.0087C11.9731 11.2709 11.8681 11.5217 11.6828 11.7071C11.4976 11.8925 11.2471 11.9977 10.9851 12C10.7232 12.0022 10.4709 11.9014 10.2824 11.7193L5.99375 7.42629L1.70507 11.7193C1.51666 11.9014 1.26431 12.0022 1.00238 12C0.740443 11.9977 0.489883 11.8925 0.304661 11.7071C0.11944 11.5217 0.0143761 11.2709 0.0121 11.0087C0.00982384 10.7465 0.110517 10.4939 0.292492 10.3053L4.58118 6.01229L0.292492 1.71929C0.10521 1.53176 0 1.27745 0 1.01229C0 0.747124 0.10521 0.492816 0.292492 0.305288Z"
                  fill="#FD5353"
                />
              </svg>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawalItem;
