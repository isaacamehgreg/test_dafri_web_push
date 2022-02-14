import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'i18n-react';

import types from '../../../../../redux/types';
import { toCrop, transformData } from '../../../../../services/helpers';

import { currentPairSelector } from '../../../../../redux/currentPair/selectors';
import { recentTradesSpotSelector } from '../../../../../redux/trade/spot/selectors';

const RecentTrades = () => {
  const dispatch = useDispatch();
  const currentPair = useSelector(currentPairSelector);
  const recentTrades = useSelector(recentTradesSpotSelector);

  useEffect(() => {
    dispatch({
      type: types.SPOT_GET_RECENT_TRADES_START,
      payload: {
        activePair: currentPair,
        params: {
          limit: 100,
        },
      },
    });
  }, [dispatch, currentPair]);

  return (
    <>
      {/* <SocketTrades /> */}
      <div className="trade-col trade-center__left">
        <div className="grid-recent">
          <div className="trade-block trade-block--trades">
            <div className="trade-header">
              <p className="trade-title">
                {L.translate('Pages.Trade.SpotTrade.RecentTradesSpot.item1')}
              </p>
            </div>
            <div className="trades-table-box">
              <div className="trade-table-header">
                <div className="trades-tr">
                  <div className="trades-td trades-td--price">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.RecentTradesSpot.item4',
                      )}
                      {` (${currentPair?.split('_')[1].toUpperCase()})`}
                    </p>
                  </div>
                  <div className="trades-td trades-td--amount ">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.RecentTradesSpot.item5',
                      )}
                      {` (${currentPair?.split('_')[0].toUpperCase()})`}
                    </p>
                  </div>
                  <div className="trades-td trades-td--date">
                    <p className="trade-td-name">
                      {L.translate(
                        'Pages.Trade.SpotTrade.RecentTradesSpot.item2',
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="trades-table trades-table--recent">
                <div className="trades-table__body">
                  {recentTrades.length ? (
                    recentTrades.map(item => (
                      <div
                        className="trades-tr"
                        key={`recent_trades-${item?.id}`}
                      >
                        <div className="trades-td trades-td--price">
                          <p className={item.type === 'sell' ? 'red' : 'green'}>
                            {item.price}
                          </p>
                        </div>
                        <div className="trades-td trades-td--amount">
                          <p className={item.type === 'sell' ? 'red' : 'green'}>
                            {item.quantity}
                          </p>
                        </div>
                        <div className="trades-td trades-td--date">
                          <p className="">{transformData(item.created_at)}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="nothing-to-show">
                      {L.translate(
                        'Pages.Trade.SpotTrade.RecentTradesSpot.item3',
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(RecentTrades);
