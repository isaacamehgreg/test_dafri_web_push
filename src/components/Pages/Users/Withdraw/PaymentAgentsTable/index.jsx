import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentAgentSelector } from '../../../../../redux/paymentAgent/selectors';
import types from '../../../../../redux/types';
import { firstLatterToUppercase } from '../../../../../services/helpers';
import InfiniteScrollList from '../../../../Base/InfiniteScrollList';

const PaymentAgentsTable = ({ selectedAgent, setChange }) => {
  const dispatch = useDispatch();
  const paymentAgent = useSelector(paymentAgentSelector);
  const { privateAgentsList } = paymentAgent;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const paymentAgentsListLastPage = privateAgentsList?.data?.last_page;

  useEffect(() => {
    if (currentPage > 1) {
      dispatch({
        type: types.GET_PRIVATE_PAYMENT_AGENTS_LIST_START,
        payload: {
          params: {
            current_page: currentPage,
            per_page: 15,
          },
        },
      });
    }
  }, [currentPage]);

  useEffect(() => {
    if (privateAgentsList && privateAgentsList?.data?.data?.length) {
      setData(prev => [...prev, ...privateAgentsList?.data?.data]);
    }
  }, [privateAgentsList]);

  const handleNextData = () => {
    if (paymentAgentsListLastPage) {
      if (currentPage === paymentAgentsListLastPage) {
        setHasMoreItems(false);
        return;
      }

      setCurrentPage(currentPage + 1);
    }
  };

  const handleSelect = item => {
    selectedAgent(item);
    setChange(false);
  };

  return (
    <div className="select-agent-table">
      <div className="table-box" id="payment-agents-list-component-table-box">
        <div className="table  table--agent-list table--auto-td-height">
          <div className="table-header">
            <div className="tr">
              <div className="td">
                <div className="td-name">Name</div>
              </div>
              <div className="td">
                <div className="td-name">Country</div>
              </div>
              <div className="td">
                <div className="td-name">Fee</div>
              </div>
              <div className="td">
                <div className="td-name">Details</div>
              </div>
            </div>
          </div>
          <div className="table-body">
            <InfiniteScrollList
              data={data}
              handleNext={handleNextData}
              hasMore={hasMoreItems}
              parentRef="payment-agents-list-component-table-box"
            >
              {data?.length
                ? data.map(el => (
                    <div
                      className="tr"
                      key={el?.id}
                      role="presentation"
                      onClick={() => handleSelect(el)}
                    >
                      <div className="td">
                        <div className="td-hidden-name">Name</div>
                        <p className="table-value">
                          {firstLatterToUppercase(el?.name)}{' '}
                          {firstLatterToUppercase(el?.surname)}
                        </p>
                      </div>
                      <div className="td">
                        <div className="td-hidden-name">Country</div>
                        <p>{firstLatterToUppercase(el?.country)}</p>
                      </div>
                      <div className="td">
                        <div className="td-hidden-name">Fee</div>
                        <p className="table-value">{el?.commission_rate}%</p>
                      </div>
                      <div className="td">
                        <div className="td-hidden-name">Details</div>
                        <div className="phone">
                          <span className="d-flex phone__icon">
                            <svg
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.03374 0H8.02974C3.61874 0 0.0317383 3.588 0.0317383 8C0.0317383 9.75 0.595738 11.372 1.55474 12.689L0.557738 15.661L3.63274 14.678C4.89774 15.516 6.40674 16 8.03374 16C12.4447 16 16.0317 12.411 16.0317 8C16.0317 3.589 12.4447 0 8.03374 0Z"
                                fill="#2DDD9D"
                              />
                              <path
                                d="M12.6883 11.2982C12.4953 11.8432 11.7293 12.2952 11.1183 12.4272C10.7003 12.5162 10.1543 12.5872 8.3163 11.8252C5.9653 10.8512 4.4513 8.46216 4.3333 8.30716C4.2203 8.15216 3.3833 7.04216 3.3833 5.89416C3.3833 4.74616 3.9663 4.18716 4.2013 3.94716C4.3943 3.75016 4.7133 3.66016 5.0193 3.66016C5.1183 3.66016 5.2073 3.66516 5.2873 3.66916C5.5223 3.67916 5.6403 3.69316 5.7953 4.06416C5.9883 4.52916 6.4583 5.67716 6.5143 5.79516C6.5713 5.91316 6.6283 6.07316 6.5483 6.22816C6.4733 6.38816 6.4073 6.45916 6.2893 6.59516C6.1713 6.73116 6.0593 6.83516 5.9413 6.98116C5.8333 7.10816 5.7113 7.24416 5.8473 7.47916C5.9833 7.70916 6.4533 8.47616 7.1453 9.09216C8.0383 9.88716 8.7623 10.1412 9.0213 10.2492C9.2143 10.3292 9.4443 10.3102 9.5853 10.1602C9.7643 9.96716 9.9853 9.64716 10.2103 9.33216C10.3703 9.10616 10.5723 9.07816 10.7843 9.15816C11.0003 9.23316 12.1433 9.79816 12.3783 9.91516C12.6133 10.0332 12.7683 10.0892 12.8253 10.1882C12.8813 10.2872 12.8813 10.7522 12.6883 11.2982Z"
                                fill="#FAFAFA"
                              />
                            </svg>
                          </span>
                          <div>
                            <p>({el?.phone})</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </InfiniteScrollList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAgentsTable;
