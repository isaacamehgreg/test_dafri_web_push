import { put, takeLatest, call, select } from 'redux-saga/effects';
import { toUpdateArray } from '../../services/helpers';
import api from '../../services/api';
import types from '../types';

export function* getAssetPairs() {
  try {
    const { data, status } = yield call(api.trading.getAssetPairs);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({
      type: types.GET_ASSET_PAIRS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: types.GET_ASSET_PAIRS_FAILURE,
    });
  }
}

export function* getTopPairs() {
  try {
    const { data, status } = yield call(api.trading.getTopPairs);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({
      type: types.GET_TOP_PAIRS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: types.GET_TOP_PAIRS_FAILURE,
    });
  }
}

export function* watcherGetAssetPairs() {
  yield takeLatest(types.GET_ASSET_PAIRS_START, getAssetPairs);
}

export function* watcherGetTopPairs() {
  yield takeLatest(types.GET_TOP_PAIRS_START, getTopPairs);
}
