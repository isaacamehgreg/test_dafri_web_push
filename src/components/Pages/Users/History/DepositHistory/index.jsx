import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { historySelector } from '../../../../../redux/trade/history/selectors';
import types from '../../../../../redux/types';
import Picker from '../../../../Base/Picker';
import TableHead from '../Table/TableHead';
import TableItem from '../Table/TableItem';
import EmptyTable from '../../../../Base/EmptyTable';
import { findAnyValueInObject } from '../../../../../services/helpers';
import 'react-datepicker/dist/react-datepicker.min.css';
import InfiniteScrollList from '../../../../Base/InfiniteScrollList';

const DepositHistory = () => {
  const dispatch = useDispatch();
  const { depositHistory } = useSelector(historySelector);

  const depositHistoryLastPage = depositHistory?.last_page;

  const [searchPhrase, setSearchPhrase] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  // Selected day in calendar return date in format 00h 00m 00s, but we need 23h 59m 59s (86399000 ms = > 23h 59m 59s)
  const DayMinusSec = 86399000;

  const historyList = findAnyValueInObject(data, searchPhrase, [
    'amount',
    'asset_name',
    'status',
    'information',
  ])
    .filter(
      item =>
        item.created_at * 1000 >= startDate &&
        (endDate ? item.created_at * 1000 <= endDate + DayMinusSec : true),
    )
    .map((item, i) => <TableItem key={item.created_at + i} {...item} />);

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setSearchPhrase('');
  };

  useEffect(() => {
    return () => {
      dispatch({
        type: types.CLEAR_ALL_HISTORY_START,
      });
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: types.GET_DEPOSIT_HISTORY_START,
      payload: {
        params: {
          currency_type: 'all',
          current_page: currentPage,
          per_page: 15,
        },
      },
    });
  }, [currentPage]);

  useEffect(() => {
    if (depositHistory && depositHistory?.data?.length) {
      setData(prev => [...prev, ...depositHistory?.data]);
    }
  }, [depositHistory]);

  const handleNextData = () => {
    if (depositHistoryLastPage) {
      if (currentPage === depositHistoryLastPage) {
        setHasMoreItems(false);
        return;
      }

      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="profile-box">
      <div className="table-panel">
        <p className="item-title">
          {L.translate('Pages.Users.History.DepositHistory.item1')}
        </p>

        <div className="panel-filters">
          <div className="filter-group">
            <div className="filter">
              <div className="field-wrap">
                <Picker
                  selected={startDate}
                  onChange={date => setStartDate(Date.parse(date))}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
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

            <div className="filter-group__line">-</div>

            <div className="filter">
              <div className="field-wrap">
                <Picker
                  selected={endDate}
                  onChange={date => setEndDate(Date.parse(date))}
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
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

          <div className="filter-search">
            <div className="filter-search__reset">
              <button
                className="button button--small-width"
                type="button"
                onClick={handleReset}
              >
                {L.translate('Pages.Users.History.DepositHistory.item2')}
              </button>
            </div>

            <div className="filter-search__field">
              <div className="field-wrap">
                <input
                  type="text"
                  className="input input--icon-right"
                  placeholder={L.translate(
                    'Pages.Users.History.DepositHistory.item4',
                  )}
                  value={searchPhrase}
                  onChange={e => setSearchPhrase(e.target.value.trim())}
                />

                <span className="field-icon">
                  <svg
                    className="fill"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.04938 16.0928C9.83702 16.0928 11.5735 15.4963 12.9838 14.3977L18.3045 19.7191C18.7019 20.103 19.3353 20.092 19.7192 19.6945C20.0936 19.3067 20.0936 18.6919 19.7192 18.3042L14.3985 12.9828C17.1243 9.47344 16.4895 4.41858 12.9807 1.69241C9.47196 -1.03376 4.41791 -0.398932 1.69215 3.11039C-1.03361 6.61971 -0.398872 11.6746 3.10992 14.4007C4.52252 15.4983 6.26058 16.0937 8.04938 16.0928ZM3.77429 3.77179C6.13538 1.4103 9.96347 1.41025 12.3246 3.7717C14.6857 6.13315 14.6858 9.96181 12.3247 12.3233C9.9636 14.6848 6.13551 14.6848 3.77438 12.3234C3.77434 12.3234 3.77434 12.3234 3.77429 12.3233C1.4132 9.97906 1.39929 6.16436 3.74318 3.80291C3.75354 3.79251 3.76389 3.78215 3.77429 3.77179Z"
                      fill="#969696"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-table">
        <div
          className="table-box table-box--trade-history"
          id="deposit-history-component-table-box"
        >
          <div className="table table--auto-td-height table--history-deposit">
            <TableHead />

            <div className="table-body">
              <InfiniteScrollList
                data={historyList}
                handleNext={handleNextData}
                hasMore={hasMoreItems}
                parentRef="deposit-history-component-table-box"
              >
                {historyList.length ? (
                  historyList
                ) : (
                  <EmptyTable
                    text={L.translate(
                      'Pages.Users.History.DepositHistory.item3',
                    )}
                  />
                )}
              </InfiniteScrollList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositHistory;
