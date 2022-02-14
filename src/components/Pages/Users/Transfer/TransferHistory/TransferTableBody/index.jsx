import React, { useEffect, useLayoutEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { exchangeHistorySelector } from '../../../../../../redux/exchange/selectors';
import InfiniteScrollList from '../../../../../Base/InfiniteScrollList';
import EmptyTable from '../../../../../Base/EmptyTable';
import TransferRow from '../TransferRow';
import types from '../../../../../../redux/types';

const TransferTableBody = ({ refTable }) => {
  const dispatch = useDispatch();
  const history = useSelector(exchangeHistorySelector);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const historyLastPage = history?.last_page;

  useEffect(() => {
    return () => {
      dispatch({
        type: types.CLEAR_EXCHANGE_HISTORY,
      });
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: types.GET_EXCHANGE_HISTORY_START,
      payload: {
        params: {
          current_page: currentPage,
          per_page: 15,
        },
      },
    });
  }, [currentPage]);

  useLayoutEffect(() => {
    if (history && history?.exchanges?.length) {
      setData(prev => [...prev, ...history?.exchanges]);
    }
  }, [history]);

  const handleNextData = () => {
    if (historyLastPage) {
      if (currentPage === historyLastPage) {
        setHasMoreItems(false);
        return;
      }

      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="table-body">
      <InfiniteScrollList
        data={data}
        handleNext={handleNextData}
        hasMore={hasMoreItems}
        parentRef={refTable}
      >
        {data && data?.length ? (
          data.map((item, i) => (
            <TransferRow key={item?.created_at + Math.random() + i} {...item} />
          ))
        ) : (
          <EmptyTable
            text={L.translate(
              'Pages.Users.Deposit.DepositHistory.DepositFiatHistory.item1',
            )}
          />
        )}
      </InfiniteScrollList>
    </div>
  );
};

export default TransferTableBody;
