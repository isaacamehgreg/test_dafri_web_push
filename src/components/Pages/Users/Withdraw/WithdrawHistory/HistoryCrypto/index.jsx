import React, { useState, useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import types from '../../../../../../redux/types';
import { walletSelector } from '../../../../../../redux/wallets/selectors';
import InfiniteScrollList from '../../../../../Base/InfiniteScrollList';
import WithdrawRow from '../WithdrawRow';
import EmptyTable from '../../../../../Base/EmptyTable';

const HistoryCrypto = ({ refTable }) => {
  const dispatch = useDispatch();
  const wallet = useSelector(walletSelector);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const { cryptoWithdrawHistory } = wallet;
  const cryptoWithdrawHistoryLastPage = cryptoWithdrawHistory?.data?.last_page;

  useEffect(() => {
    return () => {
      dispatch({
        type: types.CLEAR_ALL_HISTORY_START,
      });
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: types.GET_CRYPTO_WITHDRAW_HISTORY_START,
      payload: {
        params: {
          currency_type: 'crypto',
          current_page: currentPage,
          per_page: 15,
        },
      },
    });
  }, [currentPage]);

  useEffect(() => {
    if (cryptoWithdrawHistory && cryptoWithdrawHistory?.data?.data?.length) {
      setData(prev => [...prev, ...cryptoWithdrawHistory?.data?.data]);
    }
  }, [cryptoWithdrawHistory]);

  const handleNextData = () => {
    if (cryptoWithdrawHistoryLastPage) {
      if (currentPage === cryptoWithdrawHistoryLastPage) {
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
          data.map(item => <WithdrawRow key={uuidv4()} {...item} />)
        ) : (
          <EmptyTable
            text={L.translate(
              'Pages.Users.Withdraw.WithdrawHistory.HistoryCrypto.item1',
            )}
          />
        )}
      </InfiniteScrollList>
    </div>
  );
};

export default HistoryCrypto;
