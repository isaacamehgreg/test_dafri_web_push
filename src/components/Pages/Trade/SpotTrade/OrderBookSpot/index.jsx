import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'i18n-react';
import types from '../../../../../redux/types';
import {
  cropUsdt,
  toCrop,
  numberWithCommas,
} from '../../../../../services/helpers';
import { currentPairSelector } from '../../../../../redux/currentPair/selectors';
import {
  orderBookSpotSelector,
  recentTradesSpotSelector,
} from '../../../../../redux/trade/spot/selectors';
import { storeCurentDecimal } from '../../../../../redux/decimals/selectors';

const OrderBook = () => {
  const dispatch = useDispatch();
  const tableRef = useRef(null);
  const recentTrades = useSelector(recentTradesSpotSelector);
  const orderBook = useSelector(orderBookSpotSelector);
  const pair = useSelector(currentPairSelector);
  const decimal = useSelector(storeCurentDecimal);
  const pairFirst = pair.split('_')[0];
  const pairSecond = pair.split('_')[1];

  const assetPairs = useSelector(state => state?.assetPairs?.assetPairs);

  const lastPriceUsd = assetPairs?.length
    ? assetPairs.find(({ code }) => code === pair)
    : 0;

  const pairQuoteCode = pair?.split('_')[1];

  const handleClick = payload => {
    dispatch({
      type: types.TEMPORARY_SELECTED_TRADE,
      payload,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (!tableRef.current) return;
      tableRef.current.scrollTop = tableRef.current.scrollHeight;
    }, 1000);
  }, [pair]);

  useEffect(() => {
    dispatch({
      type: types.SPOT_GET_ORDER_BOOK_START,
      payload: {
        activePair: pair,
        limit: 100,
      },
    });
  }, [dispatch, pair]);

  return (
    <>
      {/* <SocketOrderBook /> */}
      <div className="trade-col trade-top__right">
        <div className="grid-orderbook">
          <div className="trade-block trade-block--orderbook">
            <div className="trade-header">
              <p className="trade-title">
                {L.translate('Pages.Trade.SpotTrade.OrderBookSpot.item1')}
              </p>
            </div>
            <div className="orderbook-box">
              <div className="orderbook-table-box" ref={tableRef}>
                <div className="trade-table-header">
                  <div className="orderbook-tr">
                    <div className="orderbook-td orderbook-td--price">
                      <p className="trade-td-name">
                        {L.translate(
                          'Pages.Trade.SpotTrade.OrderBookSpot.item2',
                        )}{' '}
                        ({pairSecond?.toUpperCase()})
                      </p>
                    </div>
                    <div className="orderbook-td orderbook-td--amount">
                      <p className="trade-td-name">
                        {L.translate(
                          'Pages.Trade.SpotTrade.OrderBookSpot.item3',
                        )}{' '}
                        ({pairFirst?.toUpperCase()})
                      </p>
                    </div>
                    <div className="orderbook-td orderbook-td--total">
                      <p className="trade-td-name">
                        {L.translate(
                          'Pages.Trade.SpotTrade.OrderBookSpot.item4',
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="orderbook-table orderbook-table--first">
                  <div className="orderbook-table__body">
                    {orderBook?.ask?.length ? (
                      orderBook.ask.map((item, index) => (
                        <div
                          onClick={() => {
                            handleClick({
                              id: item.id,
                              price: item.price,
                              total: item.total,
                              quantity: item.quantity_left,
                            });
                          }}
                          className="orderbook-tr"
                          key={index}
                        >
                          <div className="orderbook-td orderbook-td--price">
                            <p className="red">
                              {numberWithCommas(toCrop(decimal)(item.price))}
                            </p>
                          </div>
                          <div className="orderbook-td orderbook-td--amount">
                            <p>
                              {numberWithCommas(
                                cropUsdt(pairFirst, item.quantity_left),
                              )}
                            </p>
                          </div>
                          <div className="orderbook-td orderbook-td--total">
                            <p>{numberWithCommas(item.total)}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="nothing-to-show">
                        {L.translate(
                          'Pages.Trade.SpotTrade.OrderBookSpot.item5',
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="middle-str">
                <p className="green middle-str__value">
                  {numberWithCommas(
                    toCrop(decimal)(
                      recentTrades[0] ? recentTrades[0]?.price : 0,
                    ),
                  )}
                </p>
                <p className="middle-str__sub-value">
                  {` $${
                    pairQuoteCode.includes('usd')
                      ? numberWithCommas(
                          toCrop(decimal)(
                            recentTrades[0] ? recentTrades[0]?.price : 0,
                          ),
                        )
                      : numberWithCommas(
                          toCrop(decimal)(
                            lastPriceUsd ? lastPriceUsd?.last_price_usd : 0,
                          ),
                        )
                  }`}
                </p>
              </div>
              <div className="orderbook-table-box orderbook-table-box--without-header ">
                <div className="orderbook-table ">
                  <div className="orderbook-table__body">
                    {orderBook?.bid?.length ? (
                      orderBook.bid.map((item, index) => (
                        <div
                          onClick={e => {
                            handleClick({
                              id: item.id,
                              price: item.price,
                              total: item.total,
                              quantity: item.quantity_left,
                            });
                          }}
                          className="orderbook-tr"
                          key={index}
                        >
                          <div className="orderbook-td orderbook-td--price">
                            <p className="green">
                              {numberWithCommas(toCrop(decimal)(item.price))}
                            </p>
                          </div>
                          <div className="orderbook-td orderbook-td--amount">
                            <p>
                              {numberWithCommas(
                                cropUsdt(pairFirst, item.quantity_left),
                              )}
                            </p>
                          </div>
                          <div className="orderbook-td orderbook-td--total">
                            <p>{numberWithCommas(item.total)}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="nothing-to-show">
                        {L.translate(
                          'Pages.Trade.SpotTrade.OrderBookSpot.item6',
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
    </>
  );
};

export default React.memo(OrderBook);
