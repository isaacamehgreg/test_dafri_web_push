import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import { closeModal } from '../../../components/Base/Modal';
import { callErrorFunc } from '../../../services/helpers';
import notification from '../../../services/notification';

function* getOrderBook({ payload }) {
  try {
    const { data, status } = yield call(api.trading.getOrderBook, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.SPOT_GET_ORDER_BOOK_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.SPOT_GET_ORDER_BOOK_FAILURE });

    if (error?.response?.status === 401) return;

    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherSpotGetOrderBook() {
  yield takeLatest(types.SPOT_GET_ORDER_BOOK_START, getOrderBook);
}

function* getRecentTrades({ payload }) {
  try {
    const { data, status } = yield call(api.trading.loadRecentTrades, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.SPOT_GET_RECENT_TRADES_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.SPOT_GET_RECENT_TRADES_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* watcherSpotGetRecentTrades() {
  yield takeLatest(types.SPOT_GET_RECENT_TRADES_START, getRecentTrades);
}

function* getOrders({ payload }) {
  try {
    const { data, status } = yield call(api.trading.getOrders, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.SPOT_GET_ORDERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.SPOT_GET_ORDERS_LIST_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* watcherSpotGetOrders() {
  yield takeLatest(types.SPOT_GET_ORDERS_LIST_START, getOrders);
}

function* SwapHistory({ payload }) {
  try {
    const { data, status } = yield call(api.trading.SwapHistory, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.Swap_GET_ORDERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.Swap_GET_ORDERS_LIST_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* SwapOrders() {
  yield takeLatest(types.Swap_GET_ORDERS_LIST_START, SwapHistory);
}

function* cancelOrder({ payload }) {
  try {
    const { status } = yield call(api.trading.cancelOrder, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.SPOT_CANCEL_OPEN_ORDER_SUCCESS });
    // notification({ type: 'success', message: 'Order canceled successfully' });
  } catch (error) {
    yield put({ type: types.SPOT_CANCEL_OPEN_ORDER_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* watcherSpotCancelOrder() {
  yield takeLatest(types.SPOT_CANCEL_OPEN_ORDER_START, cancelOrder);
}

function* spotCancelAllOrders({ payload }) {
  try {
    const { status } = yield call(api.trading.cancelAllOrders, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.SPOT_CANCEL_ALL_ORDERS_SUCCESS });
    closeModal();

    notification({
      type: 'success',
      message: 'All orders canceled successfully',
    });

    yield put({
      type: types.SPOT_GET_ORDERS_LIST_START,
      payload: {
        params: {
          per_page: 100,
        },
      },
    });
  } catch (error) {
    yield put({ type: types.SPOT_CANCEL_ALL_ORDERS_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* watcherSpotCancelAllOrders() {
  yield takeLatest(types.SPOT_CANCEL_ALL_ORDERS_START, spotCancelAllOrders);
}

function* getHistory({ payload }) {
  try {
    const { data, status } = yield call(api.trading.getHistory, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.SPOT_GET_ORDERS_HISTORY_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.SPOT_GET_ORDERS_HISTORY_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* watcherSpotGetHistory() {
  yield takeLatest(types.SPOT_GET_ORDERS_HISTORY_START, getHistory);
}

function* getTradeHistory({ payload }) {
  try {
    const { data, status } = yield call(api.trading.getTradesHistory, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.SPOT_GET_TRADE_HISTORY_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.SPOT_GET_TRADE_HISTORY_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* watcherSpotGetTradeHistory() {
  yield takeLatest(types.SPOT_GET_TRADE_HISTORY_START, getTradeHistory);
}
