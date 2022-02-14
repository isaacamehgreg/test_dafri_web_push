import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { walletSelector } from '../../../../../../redux/wallets/selectors';
import InfiniteScrollList from '../../../../../Base/InfiniteScrollList';
import DepositRow from '../DepositRow';
import types from '../../../../../../redux/types';
import EmptyTable from '../../../../../Base/EmptyTable';

const DepositCryptoHistory = ({ refTable }) => {
  const dispatch = useDispatch();
  const wallet = useSelector(walletSelector);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const { cryptoHistory } = wallet;
  const cryptoHistoryLastPage = cryptoHistory?.data?.last_page;

  useEffect(() => {
    return () => {
      dispatch({
        type: types.CLEAR_ALL_HISTORY_START,
      });
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: types.GET_CRYPTO_DEPOSIT_HISTORY_START,
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
    if (cryptoHistory && cryptoHistory?.data?.data?.deposit?.length) {
      setData(prev => [...prev, ...cryptoHistory?.data?.data?.deposit]);
    }
  }, [cryptoHistory]);

  const handleNextData = () => {
    if (cryptoHistoryLastPage) {
      if (currentPage === cryptoHistoryLastPage) {
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
          data.map(item => <DepositRow key={uuidv4()} {...item} />)
        ) : (
          <EmptyTable
            text={L.translate(
              'Pages.Users.Deposit.DepositHistory.DepositCryptoHistory.item1',
            )}
          />
        )}
      </InfiniteScrollList>
    </div>
  );
};

export default DepositCryptoHistory;
