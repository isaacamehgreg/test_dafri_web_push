import React, { useState } from 'react';
import L from 'i18n-react';
import WithdrawalFilter from '../WithdrawalFilter';
import WithdrawTable from '../WithdrawTable';

const PaymentAgentWithdrawal = () => {
  const TABLE_ID = 'table-withdraw-payment-agent-component';

  const [toggleFilter, setToggleFilter] = useState(false);
  const [currentPeriod, setCurrentPeriod] = useState('');
  const [currentApprovalType, setCurrentApprovalType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="main-form-box main-form-box--agent">
      <div className="main-form">
        {toggleFilter && (
          <WithdrawalFilter
            setToggleFilter={setToggleFilter}
            currentPeriod={currentPeriod}
            setCurrentPeriod={setCurrentPeriod}
            currentApprovalType={currentApprovalType}
            setCurrentApprovalType={setCurrentApprovalType}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        )}
        <div className="table-panel">
          <p className="item-title">
            {L.translate('Pages.Users.PaymentAgent.Details.Withdrawal.item1')}
          </p>
          {!toggleFilter && (
            <div className="table-panel__open-filters">
              <button
                className="button button--wider button--big button--big--round"
                type="button"
                onClick={() => setToggleFilter(!toggleFilter)}
              >
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.Withdrawal.item2',
                )}
                <span className="button-icon">
                  <svg
                    className="stroke"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 11V1M9 3V1V3ZM9 3C8.46957 3 7.96086 3.21071 7.58579 3.58579C7.21071 3.96086 7 4.46957 7 5C7 5.53043 7.21071 6.03914 7.58579 6.41421C7.96086 6.78929 8.46957 7 9 7V3ZM9 3C9.53043 3 10.0391 3.21071 10.4142 3.58579C10.7893 3.96086 11 4.46957 11 5C11 5.53043 10.7893 6.03914 10.4142 6.41421C10.0391 6.78929 9.53043 7 9 7V3ZM3 15C3.53043 15 4.03914 14.7893 4.41421 14.4142C4.78929 14.0391 5 13.5304 5 13C5 12.4696 4.78929 11.9609 4.41421 11.5858C4.03914 11.2107 3.53043 11 3 11V15ZM3 15C2.46957 15 1.96086 14.7893 1.58579 14.4142C1.21071 14.0391 1 13.5304 1 13C1 12.4696 1.21071 11.9609 1.58579 11.5858C1.96086 11.2107 2.46957 11 3 11V15ZM3 15V17V15ZM3 11V1V11ZM9 7V17V7ZM15 15C15.5304 15 16.0391 14.7893 16.4142 14.4142C16.7893 14.0391 17 13.5304 17 13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11V15ZM15 15C14.4696 15 13.9609 14.7893 13.5858 14.4142C13.2107 14.0391 13 13.5304 13 13C13 12.4696 13.2107 11.9609 13.5858 11.5858C13.9609 11.2107 14.4696 11 15 11V15ZM15 15V17V15Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="profile-table">
        <div className="table-box table-box--agent-withdraw" id={TABLE_ID}>
          <div className="table table--auto-td-height table--mob-scroll table--agent-withdraw">
            <div className="table-header">
              <div className="tr">
                <div className="td">
                  <div className="td-name">
                    {L.translate(
                      'Pages.Users.PaymentAgent.Details.Withdrawal.item3',
                    )}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate(
                      'Pages.Users.PaymentAgent.Details.Withdrawal.item4',
                    )}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate(
                      'Pages.Users.PaymentAgent.Details.Withdrawal.item5',
                    )}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate(
                      'Pages.Users.PaymentAgent.Details.Withdrawal.item6',
                    )}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate(
                      'Pages.Users.PaymentAgent.Details.Withdrawal.item7',
                    )}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate(
                      'Pages.Users.PaymentAgent.Details.Withdrawal.item8',
                    )}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate(
                      'Pages.Users.PaymentAgent.Details.Withdrawal.item9',
                    )}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate(
                      'Pages.Users.PaymentAgent.Details.Withdrawal.item10',
                    )}
                  </div>
                </div>
                <div className="td td--center">
                  <div className="td-name">
                    {L.translate(
                      'Pages.Users.PaymentAgent.Details.Withdrawal.item11',
                    )}
                  </div>
                </div>
              </div>
            </div>

            <WithdrawTable
              tableID={TABLE_ID}
              currentPeriod={currentPeriod}
              currentApprovalType={currentApprovalType}
              startDate={startDate}
              endDate={endDate}
              isOpenFilter={toggleFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAgentWithdrawal;
