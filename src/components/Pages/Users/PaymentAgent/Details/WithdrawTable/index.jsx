import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'i18n-react';
import { paymentAgentWithdrawalListSelector } from '../../../../../../redux/paymentAgent/selectors';
import types from '../../../../../../redux/types';
import EmptyTable from '../../../../../Base/EmptyTable';
import InfiniteScrollList from '../../../../../Base/InfiniteScrollList';
import WithdrawalItem from '../WithdrawalItem';
import { transformData } from '../../../../../../services/helpers';

const WithdrawTable = ({
  tableID,
  currentPeriod,
  currentApprovalType,
  startDate,
  endDate,
  isOpenFilter,
}) => {
  const dispatch = useDispatch();
  const withdrawalList = useSelector(paymentAgentWithdrawalListSelector);
  const withdrawalListLastPage = withdrawalList?.last_page;

  const initValues = {
    current_page: 1,
    per_page: 5,
  };

  const [params, setParams] = useState(initValues);

  const [hasMoreItems, setHasMoreItems] = useState(true);

  const handleNextData = () => {
    if (withdrawalListLastPage) {
      if (params.current_page === withdrawalListLastPage) {
        setHasMoreItems(false);
        return;
      }

      setParams({ ...params, current_page: params.current_page + 1 });
    }
  };

  useEffect(() => {
    if ((startDate || endDate) && !currentPeriod) {
      if (startDate && endDate && currentApprovalType) {
        setParams({
          ...initValues,
          approval_type: currentApprovalType,
          time_from: transformData(startDate / 1000, 'YYYY-MM-DD'),
          time_to: transformData(endDate / 1000, 'YYYY-MM-DD'),
        });
      } else if (startDate && currentApprovalType) {
        setParams({
          ...initValues,
          approval_type: currentApprovalType,
          time_from: transformData(startDate / 1000, 'YYYY-MM-DD'),
        });
      } else if (endDate && currentApprovalType) {
        setParams({
          ...initValues,
          approval_type: currentApprovalType,
          time_to: transformData(endDate / 1000, 'YYYY-MM-DD'),
        });
      } else if (startDate && endDate && !currentApprovalType) {
        setParams({
          ...initValues,
          time_from: transformData(startDate / 1000, 'YYYY-MM-DD'),
          time_to: transformData(endDate / 1000, 'YYYY-MM-DD'),
        });
      } else if (startDate && !currentApprovalType) {
        setParams({
          ...initValues,
          time_from: transformData(startDate / 1000, 'YYYY-MM-DD'),
        });
      } else if (endDate && !currentApprovalType) {
        setParams({
          ...initValues,
          time_to: transformData(endDate / 1000, 'YYYY-MM-DD'),
        });
      }
    }

    if (currentPeriod && currentApprovalType) {
      setParams({
        ...initValues,
        period: currentPeriod,
        approval_type: currentApprovalType,
      });
    } else if (currentPeriod) {
      setParams({ ...initValues, period: currentPeriod });
    } else if (currentApprovalType) {
      setParams({
        ...initValues,
        approval_type: currentApprovalType,
      });
    }

    setHasMoreItems(true);

    return () => {
      dispatch({
        type: types.CLEAR_PAYMENT_AGENT_WITHDRAWAL_LIST,
      });
    };
  }, [currentPeriod, currentApprovalType, startDate, endDate]);

  useEffect(() => {
    if (!isOpenFilter) {
      setHasMoreItems(true);
      setParams({
        ...initValues,
      });
    }
  }, [isOpenFilter]);

  useEffect(() => {
    dispatch({
      type: types.GET_PAYMENT_AGENT_WITHDRAWAL_LIST_START,
      payload: { params },
    });
  }, [params]);

  return (
    <div className="table-body">
      <InfiniteScrollList
        data={withdrawalList?.data || []}
        handleNext={handleNextData}
        hasMore={hasMoreItems}
        parentRef={tableID}
      >
        {withdrawalList?.data?.length ? (
          withdrawalList?.data?.map(el => (
            <WithdrawalItem key={el?.id} item={el} pagination={params} />
          ))
        ) : (
          <EmptyTable
            text={L.translate(
              'Pages.Users.PaymentAgent.Details.WithdrawTable.item1',
            )}
          />
        )}
      </InfiniteScrollList>
    </div>
  );
};

export default WithdrawTable;
