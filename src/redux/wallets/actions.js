import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../types';
import api from '../../services/api';
import { callErrorFunc } from '../../services/helpers';

export function* getWalletsList() {
  try {
    const { data, status } = yield call(api.deposit.getWalletsList);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.GET_WALLETS_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: types.GET_WALLETS_LIST_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherGetWalletsList() {
  yield takeLatest(types.GET_WALLETS_LIST_START, getWalletsList);
}

function* getAssets() {
  try {
    const { data, status } = yield call(api.user.getAssets);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({
      type: types.GET_ASSETS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: types.GET_ASSETS_FAILURE,
    });
  }
}

export function* watcherGetAssets() {
  yield takeLatest(types.GET_ASSETS_START, getAssets);
}
