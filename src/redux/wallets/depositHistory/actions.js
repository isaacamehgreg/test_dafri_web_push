import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';

export function* getFiatDepositHistory({ payload }) {
  try {
    const { data, status } = yield call(
      api.deposit.getFiatDepositHistory,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_FIAT_DEPOSIT_HISTORY_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.GET_FIAT_DEPOSIT_HISTORY_FAILURE });
  }
}

export function* watcherGetFiatDepositHistory() {
  yield takeLatest(types.GET_FIAT_DEPOSIT_HISTORY_START, getFiatDepositHistory);
}

export function* getCryptoDepositHistory({ payload }) {
  try {
    const { data, status } = yield call(
      api.deposit.getCryptoDepositHistory,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.GET_CRYPTO_DEPOSIT_HISTORY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: types.GET_CRYPTO_DEPOSIT_HISTORY_FAILURE });
  }
}

export function* watcherGetCryptoDepositHistory() {
  yield takeLatest(
    types.GET_CRYPTO_DEPOSIT_HISTORY_START,
    getCryptoDepositHistory,
  );
}
