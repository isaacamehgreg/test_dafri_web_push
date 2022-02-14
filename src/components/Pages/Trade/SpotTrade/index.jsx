import React from 'react';
import { useLocation } from 'react-router-dom';
import InfoOfPairs from './InfoOfPairsSpot';
import Chart from '../../../Base/Chart';
import OrderBook from './OrderBookSpot';
import RecentTrades from './RecentTradesSpot';
import PlaceOrder from './PlaceOrderSpot';
import OpenOrders from './OpenOrdersSpot';
import Markets from './MarketsSpot';
import SocketAssetsPairs from '../../../HOC/SocketAssetsPairs';
import SocketBalances from '../../../HOC/SocketBalances';
import SocketOpenOrdersSpot from '../../../HOC/SocketOpenOrdersSpot';
import SocketOrderBook from '../../../HOC/SocketOrderBook';
import SocketTrades from '../../../HOC/SocketTrades';

const SpotTrade = () => {
  const location = useLocation();
  const currencyCode = location.state ? location.state.currency : null;

  return (
    <>
      <SocketAssetsPairs />
      <SocketBalances />
      <SocketOpenOrdersSpot />
      <SocketOrderBook />
      <SocketTrades />
      <section className="trade-section">
        <div className="custom-container">
          <div className="trade-wrapper">
            <div className="trade-top trade-row">
              <div className="trade-col trade-top__left">
                <InfoOfPairs currency={currencyCode} />
                <div className="grid-chart">
                  <Chart />
                </div>
              </div>
              <OrderBook />
            </div>
            <div className="trade-center trade-row">
              <RecentTrades />
              <PlaceOrder />
            </div>
            <div className="trade-bottom trade-row">
              <OpenOrders />
              <Markets />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// export default SpotTrade;
export default React.memo(SpotTrade);
