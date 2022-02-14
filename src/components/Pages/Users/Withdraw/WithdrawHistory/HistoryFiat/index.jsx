import React, { useState, useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import types from '../../../../../../redux/types';
import { walletSelector } from '../../../../../../redux/wallets/selectors';
import InfiniteScrollList from '../../../../../Base/InfiniteScrollList';
import WithdrawRow from '../WithdrawRow';

const HistoryFiat = ({ refTable }) => {
  const dispatch = useDispatch();
  const wallet = useSelector(walletSelector);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const { fiatWithdrawHistory } = wallet;
  const fiatWithdrawHistoryLastPage = fiatWithdrawHistory?.data?.last_page;

  useEffect(() => {
    return () => {
      dispatch({
        type: types.CLEAR_ALL_HISTORY_START,
      });
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: types.GET_FIAT_WITHDRAW_HISTORY_START,
      payload: {
        params: {
          currency_type: 'fiat',
          current_page: currentPage,
          per_page: 15,
        },
      },
    });
  }, [currentPage]);

  useEffect(() => {
    if (fiatWithdrawHistory && fiatWithdrawHistory?.data?.data?.length) {
      setData(prev => [...prev, ...fiatWithdrawHistory?.data?.data]);
    }
  }, [fiatWithdrawHistory]);

  const handleNextData = () => {
    if (fiatWithdrawHistoryLastPage) {
      if (currentPage === fiatWithdrawHistoryLastPage) {
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
          <p style={{ textAlign: 'center', padding: '15px 0' }}>
            {L.translate(
              'Pages.Users.Withdraw.WithdrawHistory.HistoryFiat.item1',
            )}
          </p>
        )}
      </InfiniteScrollList>
    </div>
  );
};

export default HistoryFiat;
