import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import L from 'i18n-react';
import types from '../../../../../redux/types';
import routes from '../../../../../routes';
import {
  cropUsdt,
  toCrop,
  transformData,
  numberWithCommas,
} from '../../../../../services/helpers';
// import SocketOpenOrdersSpot from '../../../../HOC/SocketOpenOrdersSpot';
import CancelAllOrders from '../../../../Base/Modals/CancelAllOrders';
import { openModal } from '../../../../Base/Modal';
import { ordersSpotSelector } from '../../../../../redux/trade/spot/selectors';
import { currentPairSelector } from '../../../../../redux/currentPair/selectors';
import { storeDecimalPairs } from '../../../../../redux/decimals/selectors';

const marketType = {
  sell: ['red', 'Sell'],
  market_sell: ['red', 'Sell'],
  buy: ['green', 'Buy'],
  market_buy: ['green', 'Buy'],
};

const getType = type => (type?.includes('market') ? 'Market' : 'Limit');

const OpenOrders = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => !!state.user.token);
  const orders = useSelector(ordersSpotSelector);
  const currentPair = useSelector(currentPairSelector);
  const decimalPairs = useSelector(storeDecimalPairs);
  const getDecimals = code => {
    return decimalPairs[code];
  };

  const handleCancelOrder = ({ target }) => {
    dispatch({
      type: types.SPOT_CANCEL_OPEN_ORDER_START,
      payload: target.value,
    });
  };

  const handleOpenModal = () => {
    openModal(() => <CancelAllOrders />);
    // setOpen(false);
  };

  useEffect(() => {
    if (auth) {
      dispatch({
        type: types.SPOT_GET_ORDERS_LIST_START,
        payload: {
          params: {
            per_page: 100,
          },
        },
      });
    }
  }, [dispatch, currentPair, auth]);

  return (
    <div className="trade-col trade-bottom__left">
      <div className="grid-bottom-table">
        <div className="trade-block trade-block--bottom-table">
          <div className="trade-header">
            <p className="trade-title">
              {L.translate('Pages.Trade.SpotTrade.OpenOrdersSpot.item1')}
            </p>

            <div className="trade-dropdown" style={{ display: 'flex' }}>
              <Link
                className="trade-drop-btn"
                to={routes.Profile.HistoryRoutes.TradeHistory.path}
                title="History"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.375 9.375H15.625"
                    stroke="#3DD598"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.3014 21.0938H4.6875C4.4803 21.0938 4.28159 21.0114 4.13507 20.8649C3.98856 20.7184 3.90625 20.5197 3.90625 20.3125V4.6875C3.90625 4.4803 3.98856 4.28159 4.13507 4.13507C4.28159 3.98856 4.4803 3.90625 4.6875 3.90625H20.3125C20.5197 3.90625 20.7184 3.98856 20.8649 4.13507C21.0114 4.28159 21.0938 4.4803 21.0938 4.6875V15.3014C21.0938 15.404 21.0735 15.5056 21.0343 15.6004C20.995 15.6952 20.9375 15.7813 20.8649 15.8538L15.8538 20.8649C15.7813 20.9375 15.6952 20.995 15.6004 21.0343C15.5056 21.0735 15.404 21.0938 15.3014 21.0938V21.0938Z"
                    stroke="#3DD598"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.023 15.625H15.625V21.0234"
                    stroke="#3DD598"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <button
                className="trade-drop-btn"
                style={{ marginLeft: '10px' }}
                onClick={handleOpenModal}
              >
                {L.translate('Pages.Trade.SpotTrade.OpenOrdersSpot.item2')}
              </button>
            </div>
          </div>
          <div className="trades-table-box">
            <div className="bottom-table bottom-table--open-orders">
              <div className="trade-table-header">
                <div className="trades-tr">
                  <div className="trades-td trades-td--date">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item3',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--pair ">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item4',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--type">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item5',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--side">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item6',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--price">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item7',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--amount">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item8',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--filled">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item9',
                      )}{' '}
                      (%)
                    </p>
                  </div>
                  <div className="trades-td trades-td--total">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item10',
                      )}
                    </p>
                  </div>
                  <div className="trades-td trades-td--action trades-td--centered">
                    <p className="trade-td-name" />
                  </div>
                </div>
              </div>
              <div className="trades-table trades-table--open-orders">
                <div className="trades-table__body">
                  {!auth ? (
                    <div className="nothing-to-show">
                      <Link to={routes.Auth.Login.path}>
                        {L.translate(
                          'Pages.Trade.SpotTrade.OpenOrdersSpot.item11',
                        )}
                      </Link>{' '}
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item12',
                      )}{' '}
                      <Link to={routes.Auth.Signup.path}>
                        {L.translate(
                          'Pages.Trade.SpotTrade.OpenOrdersSpot.item13',
                        )}
                      </Link>{' '}
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item14',
                      )}
                    </div>
                  ) : orders?.data?.length ? (
                    orders.data.map(data => (
                      <div className="trades-tr" key={data.id}>
                        <div className="trades-td trades-td--date">
                          <p>{transformData(data?.created_at)}</p>
                        </div>
                        <div className="trades-td trades-td--pair">
                          <p>{data?.pair?.replace('_', '/')?.toUpperCase()}</p>
                        </div>
                        <div className="trades-td trades-td--type">
                          {data?.trigger_conditions
                            ? 'Stop-Limit'
                            : getType(data?.type)}
                        </div>
                        <div
                          className={`trades-td trades-td--side ${
                            data?.type === 'buy' ? 'green' : 'red'
                          }`}
                        >
                          {marketType[data?.type]
                            ? marketType[data?.type][1]
                            : null}
                        </div>
                        <div className="trades-td trades-td--price">
                          <p className="">
                            {numberWithCommas(
                              toCrop(getDecimals(data?.pair))(
                                data?.price || data?.average,
                              ),
                            )}
                          </p>
                        </div>
                        <div className="trades-td trades-td--amount">
                          <p className="">
                            {' '}
                            {numberWithCommas(
                              cropUsdt(
                                data?.pair?.split('_')[0],
                                data?.quantity,
                              ),
                            )}
                          </p>
                        </div>
                        <div className="trades-td trades-td--filled">
                          <p className="">{data?.filled || '---'}</p>
                        </div>
                        <div className="trades-td trades-td--total">
                          <p className="">
                            {numberWithCommas(toCrop(6)(data?.total))}
                          </p>
                        </div>
                        <div className="trades-td trades-td--action trades-td--centered">
                          <div className="trade-table-action">
                            <button
                              type="button"
                              value={data?.id}
                              onClick={handleCancelOrder}
                            >
                              {L.translate(
                                'Pages.Trade.SpotTrade.OpenOrdersSpot.item15',
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="nothing-to-show">
                      {L.translate(
                        'Pages.Trade.SpotTrade.OpenOrdersSpot.item16',
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenOrders; // React.memo(OpenOrders);
