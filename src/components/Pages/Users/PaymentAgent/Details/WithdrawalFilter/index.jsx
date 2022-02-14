import React, { useState } from 'react';
import L from 'i18n-react';
import { useDispatch } from 'react-redux';
import types from '../../../../../../redux/types';
import Picker from '../../../../../Base/Picker';

const WithdrawalFilter = ({
  setToggleFilter,
  currentPeriod,
  setCurrentPeriod,
  currentApprovalType,
  setCurrentApprovalType,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setToggleFilter(false);
    setCurrentPeriod('');
    setCurrentApprovalType('');
    setStartDate(null);
    setEndDate(null);

    dispatch({
      type: types.CLEAR_PAYMENT_AGENT_WITHDRAWAL_LIST,
    });
  };

  const handleCurrentPeriod = e => {
    setCurrentPeriod(e.target.name);
    setStartDate(null);
    setEndDate(null);
  };

  const handleCurrentApprovalType = e => {
    setCurrentApprovalType(e.target.name);
  };

  return (
    <div className="filter-form">
      <div className="filter-header">
        <p className="item-title">Filters</p>
        <div className="d-flex filter-header__action">
          <button type="button" onClick={handleClose}>
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
                fill="#9195A4"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="filter-form__body">
        <div className="date-filter">
          <div className="filter-item">
            <p className="filter-name">
              {L.translate(
                'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item1',
              )}
            </p>

            <div className="filter">
              <div className="field-wrap">
                <Picker
                  selected={startDate}
                  onChange={date => {
                    setStartDate(Date.parse(date));
                    setCurrentPeriod('');
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  maxDate={Date.now()}
                />

                <span className="field-icon">
                  <svg
                    className="stroke"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 5V1V5ZM14 5V1V5ZM5 9H15H5ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z"
                      stroke="#9195A4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="filter-item">
            <p className="filter-name">
              {L.translate(
                'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item2',
              )}
            </p>
            <div className="filter">
              <div className="field-wrap">
                <Picker
                  selected={endDate}
                  onChange={date => {
                    setEndDate(Date.parse(date));
                    setCurrentPeriod('');
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  maxDate={Date.now()}
                />

                <span className="field-icon">
                  <svg
                    className="stroke"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 5V1V5ZM14 5V1V5ZM5 9H15H5ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z"
                      stroke="#9195A4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="sort-filters">
          <div className="filter-item">
            <p className="filter-name">
              {L.translate(
                'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item3',
              )}
              :
            </p>
            <div className="sort-filter">
              <button
                name="all"
                className={`${currentPeriod === 'all' ? 'active' : ''}`}
                onClick={handleCurrentPeriod}
              >
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item4',
                )}
              </button>
              <button
                name="today"
                className={`${currentPeriod === 'today' ? 'active' : ''}`}
                onClick={handleCurrentPeriod}
              >
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item5',
                )}
              </button>
              <button
                name="week"
                className={`${currentPeriod === 'week' ? 'active' : ''}`}
                onClick={handleCurrentPeriod}
              >
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item6',
                )}
              </button>
              <button
                name="year"
                className={`${currentPeriod === 'year' ? 'active' : ''}`}
                onClick={handleCurrentPeriod}
              >
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item7',
                )}
              </button>
            </div>
          </div>
          <div className="sort-filters__line" />
          <div className="filter-item">
            <p className="filter-name">
              {L.translate(
                'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item8',
              )}
              :
            </p>
            <div className="sort-filter">
              <button
                name="waiting"
                className={`${
                  currentApprovalType === 'waiting' ? 'active' : ''
                }`}
                onClick={handleCurrentApprovalType}
              >
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item9',
                )}
              </button>
              <button
                name="confirmed"
                className={`${
                  currentApprovalType === 'confirmed' ? 'active' : ''
                }`}
                onClick={handleCurrentApprovalType}
              >
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item10',
                )}
              </button>
              <button
                name="rejected"
                className={`${
                  currentApprovalType === 'rejected' ? 'active' : ''
                }`}
                onClick={handleCurrentApprovalType}
              >
                {L.translate(
                  'Pages.Users.PaymentAgent.Details.WithdrawalFilter.item11',
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalFilter;
