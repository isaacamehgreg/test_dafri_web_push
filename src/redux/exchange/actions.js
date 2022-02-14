import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../types';
import api from '../../services/api';
import notification from '../../services/notification';
import { callErrorFunc } from '../../services/helpers';

function* getExchangeRate({ payload }) {
  try {
    const { data, status } = yield call(api.bankTransfer.exchangeRate, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.EXCHANGE_RATE_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.EXCHANGE_RATE_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherGetExchangeRate() {
  yield takeLatest(types.EXCHANGE_RATE_START, getExchangeRate);
}

function* getSecondAssets({ payload }) {
  try {
    const { data, status } = yield call(
      api.bankTransfer.getSecondAssets,
      payload,
    );
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.GET_SECOND_ASSETS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_SECOND_ASSETS_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* watcherGetSecondAssets() {
  yield takeLatest(types.GET_SECOND_ASSETS_START, getSecondAssets);
}

function* makeExchangeRate({ payload }) {
  try {
    const { data, status } = yield call(api.bankTransfer.makeExchange, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.EXCHANGE_SUCCESS, payload: data });
    notification({
      title: 'Instant Exchange',
      type: 'success',
      message: 'You succesfully exchanged',
    });
    yield put({ type: types.GET_WALLETS_LIST_START });
    yield put({
      type: types.GET_EXCHANGE_HISTORY_START,
      payload: {
        params: { current_page: 1, per_page: 15 },
      },
    });
  } catch (error) {
    console.dir(error);
    yield put({ type: types.EXCHANGE_FAILURE });
    if (error?.response?.status === 401) return;
    console.log(error);

    callErrorFunc(error?.response?.data?.errors);

    if (window && window.webkit && window.webkit.messageHandlers) {
      window.webkit.messageHandlers.handleExchangeMessageError.postMessage(
        error?.response?.data?.errors?.[0],
      );
    }
  }
}

export function* watcherMakeExchange() {
  yield takeLatest(types.EXCHANGE_START, makeExchangeRate);
}

function* getExchangeHistory({ payload }) {
  try {
    const { data, status } = yield call(
      api.bankTransfer.getExchangeHistory,
      payload,
    );
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.GET_EXCHANGE_HISTORY_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_EXCHANGE_HISTORY_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* watcherGetExchangeHistory() {
  yield takeLatest(types.GET_EXCHANGE_HISTORY_START, getExchangeHistory);
}
