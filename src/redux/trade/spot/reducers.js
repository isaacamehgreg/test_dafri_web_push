import { combineReducers } from 'redux';
import types from '../../types';

const orderBook = (state = {}, { type, payload }) => {
  switch (type) {
    case types.SPOT_GET_ORDER_BOOK_SUCCESS:
      return payload;
    case types.UPDATE_SPOT_ORDER_BOOK:
      return payload;
    default:
      return state;
  }
};

const recentTrades = (state = [], { type, payload }) => {
  switch (type) {
    case types.SPOT_GET_RECENT_TRADES_SUCCESS:
      return payload;
    case types.UPDATE_SPOT_RECENT_TRADES:
      return payload;

    default:
      return state;
  }
};

const initialState = {
  loading: false,
  orders: [],
  swapdata: [],
  history: { data: [] },
  tradeHistory: { data: [] },
};

const tables = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SPOT_GET_ORDERS_HISTORY_START:
    case types.SPOT_GET_TRADE_HISTORY_START:
      return { ...state, loading: true };

    case types.CLEAR_ALL_ORDERS_START:
      return { ...state, orders: [], tradeHistory: [] };

    case types.SPOT_GET_ORDERS_LIST_SUCCESS:
      return { ...state, orders: payload };

    case types.Swap_GET_ORDERS_LIST_SUCCESS:
      return { ...state, swapdata: payload };
    case types.UPDATE_SPOT_OPEN_ORDERS:
      return { ...state, orders: { ...state.orders, data: payload } };

    case types.SPOT_CANCEL_ALL_ORDERS_SUCCESS:
      return { ...state, orders: [] };

    case types.SPOT_GET_ORDERS_HISTORY_SUCCESS:
      return { ...state, history: payload, loading: false };

    case types.UPDATE_SPOT_CLOSED_ORDERS:
      return { ...state, history: payload };

    case types.SPOT_GET_TRADE_HISTORY_SUCCESS:
      return { ...state, tradeHistory: payload, loading: false };

    case types.SPOT_GET_ORDERS_HISTORY_FAILURE:
    case types.SPOT_GET_TRADE_HISTORY_FAILURE:
      return { ...initialState, loading: false };

    case types.LOGOUT_SUCCESS: {
      return initialState;
    }

    default:
      return state;
  }
};

export default combineReducers({ tables, orderBook, recentTrades });
