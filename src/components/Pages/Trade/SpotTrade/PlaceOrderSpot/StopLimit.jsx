import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import L from 'i18n-react';

import types from '../../../../../redux/types';
import {
  numberValidation,
  cropNumber,
  toCrop,
} from '../../../../../services/helpers';
import routes from '../../../../../routes';

import PercentButtons from './PercentButtons';
import { currentPairSelector } from '../../../../../redux/currentPair/selectors';
import { spotWalletSelector } from '../../../../../redux/wallets/selectors';
import {
  selectedTradePriceSelector,
  selectedTradeSelector,
} from '../../../../../redux/temporary/selectors';
import { calcSelector } from '../../../../../redux/trade/calculate/selectors';
import { storeCurentDecimal } from '../../../../../redux/decimals/selectors';
import notification from '../../../../../services/notification';

function StopLimit({ balance, mode, assetToTrade, assetBalance }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => !!state.user.token);
  const currentPair = useSelector(currentPairSelector);
  const allAssets = useSelector(spotWalletSelector); // state => state?.assets?.assets
  const decimal = useSelector(storeCurentDecimal);
  const [orderMax, setOrderMax] = useState(0);
  const [orderMin, setOrderMin] = useState(0);

  // if Max or Min order value changes
  useEffect(() => {
    if (allAssets) {
      const { order_max, order_min } =
        allAssets?.find(item => item.code === assetToTrade.toLowerCase()) || 0;
      setOrderMax(order_max);
      setOrderMin(order_min);
    }
  }, [allAssets, assetToTrade]);

  // const assetPairs = useSelector(state => state.assetPairs.assetPairs);
  const initState = {
    stop: '',
    limit: '',
    quantity: '',
    pair_code: currentPair,
    is_margin: 0,
    type: mode.toLowerCase(), // buy or sell
  };
  const [stopLimitOrderState, setStopLimitOrderState] = useState({
    ...initState,
  });
  const [stopLimitOrderStateFull, setStopLimitOrderStateFull] = useState({
    ...initState,
  });
  const [total, setTotal] = useState('');

  const countOrder = e => {
    const { value } = e.target;
    if (stopLimitOrderState.limit) {
      if (value > orderMax || value < orderMin) {
        setStopLimitOrderState({
          ...stopLimitOrderState,
          quantity: '',
        });
        setStopLimitOrderStateFull({
          ...stopLimitOrderStateFull,
          quantity: '',
        });
      } else {
        setStopLimitOrderState({
          ...stopLimitOrderState,
          quantity: cropNumber(e.target.value),
        });
        setStopLimitOrderStateFull({
          ...stopLimitOrderStateFull,
          quantity: e.target.value,
        });
      }

      // setTotal(toCrop(6)(e.target.value * stopLimitOrderStateFull.limit));
      setTotal(toCrop(8)(e.target.value * stopLimitOrderStateFull.limit));
    }
  };

  const handleChangeInput = e => {
    const { value, name } = e.target;
    if (numberValidation(value)) {
      setStopLimitOrderState({
        ...stopLimitOrderState,
        [name]: value,
      });
      setStopLimitOrderStateFull({
        ...stopLimitOrderStateFull,
        [name]: value,
      });
      if (
        // stopLimitOrderState.stop &&
        stopLimitOrderState.limit &&
        e.target.name === 'quantity'
      ) {
        if (value > orderMax || value < orderMin) {
          setTotal('');
        } else {
          // setTotal(toCrop(6)(value * stopLimitOrderStateFull.limit));
          setTotal(toCrop(8)(value * stopLimitOrderStateFull.limit));
        }
      }
      if (
        // stopLimitOrderState.stop &&
        stopLimitOrderState.quantity &&
        e.target.name === 'limit'
      ) {
        // setTotal(toCrop(6)(value * stopLimitOrderStateFull.quantity));
        setTotal(toCrop(8)(value * stopLimitOrderStateFull.quantity));
      }
      // if (
      //   stopLimitOrderState.limit &&
      //   stopLimitOrderState.quantity &&
      //   e.target.name === 'stop'
      // ) {
      //   setTotal(cropNumber(e.target.value * stopLimitOrderState.limit));
      // }
    }
  };

  const handleChangeTotal = e => {
    const { value } = e.target;
    if (stopLimitOrderState.limit) {
      if (numberValidation(value)) {
        setTotal(value);
        if (
          value / stopLimitOrderState.limit < orderMin ||
          value / stopLimitOrderState.limit > orderMax
        ) {
          setStopLimitOrderState({
            ...stopLimitOrderState,
            quantity: '',
          });
          setStopLimitOrderStateFull({
            ...stopLimitOrderState,
            quantity: '',
          });
        } else {
          setStopLimitOrderState({
            ...stopLimitOrderState,
            quantity: cropNumber(value / stopLimitOrderStateFull.limit),
          });
          setStopLimitOrderStateFull({
            ...stopLimitOrderStateFull,
            quantity: value / stopLimitOrderStateFull.limit,
          });
        }
      }
    }
  };

  const createTrade = () => {
    // if (validIEO) {
    //   notification({
    //     type: 'info',
    //     title: 'IEO',
    //     message: 'Wait until the end of the IEO',
    //   });
    //   return;
    // }
    dispatch({
      type: types.CREATE_STOP_LIMIT_ORDER_START,
      payload: {
        ...stopLimitOrderStateFull,
        stop: +cropNumber(stopLimitOrderStateFull.stop, 8),
        limit: +cropNumber(stopLimitOrderStateFull.limit, 8),
        quantity: +cropNumber(stopLimitOrderStateFull.quantity, 8),
      },
    });
  };

  const handleTrade = e => {
    e.preventDefault();
    if (
      stopLimitOrderState.quantity &&
      stopLimitOrderState.stop &&
      stopLimitOrderState.limit
    ) {
      // if (mode === 'Buy') {
      //   if (total <= balance) {
      //     createTrade();
      //   } else {
      //     // alert('Error! Total is more then balance!'); // TEMP!
      //     return;
      //   }
      // } else if (stopLimitOrderState.quantity <= balance) {
      //   createTrade();
      // } else {
      //   // alert('Error! Amount is more then balance!'); // TEMP!
      //   return;
      // }
      createTrade();
    }
    setStopLimitOrderState({
      ...initState,
    });
    setStopLimitOrderStateFull({
      ...initState,
    });
    setTotal('');
  };

  const percentButtonCountValue = perсent => {
    if (+stopLimitOrderState.limit && +stopLimitOrderState.stop) {
      if (mode === 'Buy') {
        return (+balance / +stopLimitOrderStateFull.limit) * +perсent;
      }
      return +balance * +perсent;
    }
    return 0;
  };

  const priceFromOrderBook = useSelector(selectedTradePriceSelector);

  useEffect(() => {
    if (priceFromOrderBook) {
      setStopLimitOrderState({
        ...stopLimitOrderState,
        // limit: cropNumber(priceFromOrderBook),
        limit: toCrop(decimal)(priceFromOrderBook),
      });
      setStopLimitOrderStateFull({
        ...stopLimitOrderStateFull,
        limit: priceFromOrderBook,
      });
      setTotal(
        // toCrop(6)(stopLimitOrderStateFull.quantity * priceFromOrderBook),
        toCrop(8)(stopLimitOrderStateFull.quantity * priceFromOrderBook),
      );
    }
  }, [priceFromOrderBook]);

  useEffect(() => {
    setTotal('');

    setStopLimitOrderState({
      ...stopLimitOrderState,
      pair_code: currentPair,
    });
    setStopLimitOrderStateFull({
      ...stopLimitOrderStateFull,
      pair_code: currentPair,
    });
  }, [currentPair]);
  return (
    <>
      <div className="place-order-form__group">
        <div className="trade-field">
          <div className="field-wrap">
            <p className="trade-input-label">
              {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item24')}{' '}
              {assetBalance.toUpperCase()}
            </p>
            <input
              type="text"
              className="trade-input trade-input--with-label"
              placeholder="0.000000"
              autoComplete="off"
              name="stop"
              onChange={handleChangeInput}
              value={stopLimitOrderState.stop}
            />
          </div>
        </div>
        <div className="trade-field">
          <div className="field-wrap">
            <p className="trade-input-label">
              {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item25')}{' '}
              {assetBalance.toUpperCase()}
            </p>
            <input
              type="text"
              className="trade-input trade-input--with-label"
              placeholder="0.000000"
              autoComplete="off"
              name="limit"
              onChange={handleChangeInput}
              value={stopLimitOrderState.limit}
            />
          </div>
        </div>
        <div className="trade-field">
          <div className="field-wrap">
            <p className="trade-input-label">
              {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item26')}{' '}
              {assetToTrade.toUpperCase()}
            </p>
            <input
              type="text"
              className="trade-input trade-input--with-label"
              placeholder="0.000000"
              autoComplete="off"
              name="quantity"
              onChange={handleChangeInput}
              value={stopLimitOrderState.quantity}
            />
          </div>
        </div>

        <PercentButtons
          countOrder={countOrder}
          percentButtonCountValue={percentButtonCountValue}
        />
        <div className="trade-field">
          <div className="field-wrap">
            <p className="trade-input-label">
              {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item27')}{' '}
              {assetBalance.toUpperCase()}
            </p>
            <input
              type="text"
              className="trade-input trade-input--with-label"
              placeholder="0.000000"
              autoComplete="off"
              name="total"
              onChange={handleChangeTotal}
              value={total}
            />
          </div>
        </div>
      </div>

      <div className="place-order-btn">
        {!auth ? (
          <div className="authorize-to-action">
            <Link to={routes.Auth.Login.path}>
              {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item30')}
            </Link>{' '}
            {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item31')}{' '}
            <Link to={routes.Auth.Signup.path}>
              {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item32')}
            </Link>{' '}
            {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item33')}
          </div>
        ) : mode === 'Buy' ? (
          <button
            className="trade-order-btn trade-order-btn--buy"
            type="submit"
            onClick={handleTrade}
          >
            {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item28')}
            <span className="d-flex trade-order-btn__icon">
              <svg
                className="fill"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8393 11.5035L19.8393 11.5035L19.856 18.4118C19.8561 18.4156 19.8561 18.4192 19.856 18.4224M19.8393 11.5035L19.356 18.4169L19.856 18.4178C19.856 18.4309 19.8554 18.4412 19.8552 18.4455L19.8551 18.447C19.8553 18.4437 19.8558 18.4349 19.856 18.4235C19.856 18.4232 19.856 18.4228 19.856 18.4224M19.8393 11.5035C19.8374 10.7097 19.1924 10.0676 18.3984 10.0695C17.6045 10.0713 16.9624 10.7164 16.9643 11.5103L16.9643 11.5104L16.9726 14.9391M19.8393 11.5035L16.9726 14.9391M19.856 18.4224C19.8536 19.211 19.2138 19.8533 18.4224 19.8555C18.4207 19.8555 18.419 19.8555 18.4172 19.8555L18.4151 19.8555L18.398 19.8554L11.5041 19.8388L11.5053 19.3388L11.5041 19.8388C10.7104 19.8369 10.0681 19.1919 10.0701 18.3978C10.072 17.6039 10.7171 16.9619 11.511 16.9637L11.511 16.9637L14.9397 16.972L1.75709 3.78943C1.19571 3.22805 1.19571 2.31789 1.75709 1.7565C2.31848 1.19511 3.22864 1.19511 3.79003 1.7565L16.9726 14.9391M19.856 18.4224C19.856 18.4204 19.856 18.4184 19.856 18.4164L16.9726 14.9391M18.4171 19.8555C18.4164 19.8555 18.4158 19.8555 18.4151 19.8555L18.4171 19.8555Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </span>
          </button>
        ) : (
          <button
            className="trade-order-btn trade-order-btn--sell"
            type="submit"
            onClick={handleTrade}
          >
            {L.translate('Pages.Trade.SpotTrade.PlaceOrderSpot.item29')}
            <span className="d-flex trade-order-btn__icon">
              <svg
                className="fill"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.35206 9.6879L1.35206 9.6879L1.33536 2.77964C1.33533 2.77581 1.33534 2.77225 1.33538 2.76899M1.35206 9.6879L1.83539 2.77446L1.33539 2.77361C1.33541 2.76049 1.33596 2.75022 1.33621 2.74591L1.3363 2.74439C1.3361 2.74768 1.33557 2.75655 1.3354 2.76788C1.3354 2.76825 1.33539 2.76862 1.33538 2.76899M1.35206 9.6879C1.35399 10.4817 1.99903 11.1238 2.79302 11.122C3.58693 11.1201 4.22898 10.475 4.2271 9.68106L4.2271 9.68103L4.21878 6.2523M1.35206 9.6879L4.21878 6.2523M1.33538 2.76899C1.33777 1.98041 1.9776 1.33808 2.76897 1.33595C2.77066 1.33593 2.77241 1.33591 2.77421 1.33591L2.77627 1.33591L2.79343 1.33596L9.68727 1.35262L9.68606 1.85262L9.68728 1.35262C10.481 1.35455 11.1233 1.9995 11.1213 2.79361C11.1194 3.5875 10.4743 4.22954 9.68044 4.22766L9.68041 4.22766L6.25172 4.21939L19.4343 17.402C19.9957 17.9634 19.9957 18.8735 19.4343 19.4349C18.8729 19.9963 17.9628 19.9963 17.4014 19.4349L4.21878 6.2523M1.33538 2.76899C1.33538 2.771 1.33538 2.773 1.33539 2.77501L4.21878 6.2523M2.77432 1.33594C2.77496 1.33594 2.77561 1.33594 2.77627 1.33595L2.77432 1.33594Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </span>
          </button>
        )}
      </div>
    </>
  );
}

export default StopLimit;
