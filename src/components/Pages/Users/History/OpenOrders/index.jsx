import React, { useEffect, useState, useMemo } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { historySelector } from '../../../../../redux/trade/history/selectors';
import types from '../../../../../redux/types';
import Picker from '../../../../Base/Picker';
import TableHead from '../Table/TableHead';
import TableItem from '../Table/TableItem';
import EmptyTable from '../../../../Base/EmptyTable';
import {
  findAnyValueInObject,
  cropUsdt,
  toCrop,
  transformData,
  numberWithCommas,
} from '../../../../../services/helpers';
import InfiniteScrollList from '../../../../Base/InfiniteScrollList';
import { ordersSpotSelector } from '../../../../../redux/trade/spot/selectors';
import { storeDecimalPairs } from '../../../../../redux/decimals/selectors';
import 'react-datepicker/dist/react-datepicker.min.css';
import { openModal } from '../../../../Base/Modal';
import CancelAllOrders from '../../../../Base/Modals/CancelAllOrders';

const getType = type => (type?.includes('market') ? 'Market' : 'Limit');

const OpenOrders = () => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const orders = useSelector(ordersSpotSelector);
  const decimalPairs = useSelector(storeDecimalPairs);
  const getDecimals = code => {
    return decimalPairs[code];
  };
  const ordersLastPage = orders?.last_page;
  // Selected day in calendar return date in format 00h 00m 00s, but we need 23h 59m 59s (86399000 ms = > 23h 59m 59s)
  const DayMinusSec = 86399000;

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setSearchPhrase('');
  };

  const ordersList = findAnyValueInObject(data, searchPhrase, [
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
    .map(
      (item, i) => (
        <div className="tr" key={item.id}>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item1')}
            </div>
            <p>{transformData(item?.created_at)}</p>
          </div>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item2')}
            </div>
            <div className="table-coin">
              {/* <div className="table-coin__icon">
                <img src={item?.want_asset?.img_path} alt="" />
                <img src={item?.offer_asset?.img_path} alt="" />
              </div> */}
              <p className="table-coin__name">
                {item?.pair?.replace('_', '/')?.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item3')}
            </div>
            <p>
              {' '}
              {item?.trigger_conditions ? 'Stop-Limit' : getType(data?.type)}
            </p>
          </div>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item4')}
            </div>
            <p className={`${item?.type.includes('sell') ? 'red' : 'green'}`}>
              <strong>{item?.type?.replace('_', ' ')}</strong>
            </p>
          </div>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item5')}
            </div>
            <p>
              {numberWithCommas(
                toCrop(getDecimals(data?.pair))(item?.price || item?.average),
              )}{' '}
            </p>
          </div>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item6')}
            </div>
            <p>
              {numberWithCommas(
                cropUsdt(item?.pair?.split('_')[0], item?.quantity),
              )}
            </p>
          </div>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item7')}%
            </div>
            <p>{item?.filled}</p>
          </div>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item8')}
            </div>
            <p> {numberWithCommas(toCrop(6)(item?.total))}</p>
          </div>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item9')}
            </div>
            <p>{item?.trigger_conditions}</p>
          </div>
          <div className="td">
            <div className="td-hidden-name">
              {L.translate('Pages.Users.History.OpenOrders.item10')}
            </div>
            <p>{item?.status}</p>
          </div>
        </div>
      ),
      // <TableItem key={item.created_at + i} {...item} />
    );

  const handleNextData = () => {
    if (ordersLastPage) {
      if (currentPage === ordersLastPage) {
        setHasMoreItems(false);
        return;
      }

      setCurrentPage(currentPage + 1);
    }
  };

  const handleCancelAll = () => {
    openModal(() => <CancelAllOrders />);

    dispatch({
      type: types.CLEAR_ALL_ORDERS_START,
    });
  };

  useEffect(() => {
    dispatch({
      type: types.SPOT_GET_ORDERS_LIST_START,
      payload: {
        params: {
          per_page: 5,
          current_page: currentPage,
        },
      },
    });
  }, [currentPage]);

  useEffect(() => {
    if (orders && orders?.data?.length) {
      setData(prev => [...prev, ...orders.data]);
    }
  }, [orders]);

  useEffect(() => {
    return () => {
      dispatch({
        type: types.CLEAR_ALL_ORDERS_START,
      });
    };
  }, []);

  return (
    <div className="profile-box">
      <div className="table-panel">
        <p className="item-title">
          {L.translate('Pages.Users.History.OpenOrders.item11')}
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
                {L.translate('Pages.Users.History.OpenOrders.item12')}
              </button>
            </div>
            <div className="filter-search__field">
              <div className="field-wrap">
                <input
                  type="text"
                  className="input input--icon-right"
                  placeholder={L.translate(
                    'Pages.Users.History.OpenOrders.item25',
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
          id="open-orders-component-table-box"
        >
          <div className="table table--auto-td-height table--open-orders-sl">
            <div className="table-header">
              <div className="tr">
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item13')}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item14')}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item15')}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item16')}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item17')}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item18')}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item19')}%
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item20')}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item21')}
                  </div>
                </div>
                <div className="td">
                  <div className="td-name">
                    {L.translate('Pages.Users.History.OpenOrders.item22')}
                  </div>
                </div>
              </div>
            </div>
            <div className="table-body">
              <InfiniteScrollList
                data={ordersList}
                handleNext={handleNextData}
                hasMore={hasMoreItems}
                parentRef="open-orders-component-table-box"
              >
                {ordersList.length ? (
                  ordersList
                ) : (
                  <EmptyTable
                    text={L.translate('Pages.Users.History.OpenOrders.item23')}
                  />
                )}
              </InfiniteScrollList>
            </div>
          </div>
        </div>

        {!!data && !!data.length && (
          <div className="order-type">
            <button className="order-type__btn" onClick={handleCancelAll}>
              {L.translate('Pages.Users.History.OpenOrders.item24')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenOrders;
