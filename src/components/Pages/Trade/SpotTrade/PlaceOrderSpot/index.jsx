import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'i18n-react';
import types from '../../../../../redux/types';
import BuySellWrapper from './BuySellWrapper';

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const [orderType, setOrderType] = useState('limit_order');

  const handleChangeOrderType = e => {
    setOrderType(e.currentTarget.name);
  };

  return (
    <div className="trade-col trade-center__right">
      <div className="grid-place-order">
        <div className="trade-block">
          <div className="trade-header">
            <p className="trade-title">
              {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item2')}
            </p>
            <div className="trade-tab">
              <div className="trade-tab__col">
                <button
                  name="limit_order"
                  className={
                    orderType === 'limit_order'
                      ? 'trade-tab__item active'
                      : 'trade-tab__item'
                  }
                  onClick={e => handleChangeOrderType(e)}
                >
                  {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item3')}
                </button>
              </div>
              <div className="trade-tab__col">
                <button
                  name="market_order"
                  className={
                    orderType === 'market_order'
                      ? 'trade-tab__item active'
                      : 'trade-tab__item'
                  }
                  onClick={e => handleChangeOrderType(e)}
                >
                  {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item4')}
                </button>
              </div>
              <div className="trade-tab__col">
                <button
                  name="stop_limit"
                  className={
                    orderType === 'stop_limit'
                      ? 'trade-tab__item active'
                      : 'trade-tab__item'
                  }
                  onClick={e => handleChangeOrderType(e)}
                >
                  {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item5')}
                </button>
              </div>
            </div>
          </div>
          <div className="trade-form-box">
            <div className="place-order">
              <BuySellWrapper orderType={orderType} mode="Buy" />
              <BuySellWrapper orderType={orderType} mode="Sell" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PlaceOrder);
