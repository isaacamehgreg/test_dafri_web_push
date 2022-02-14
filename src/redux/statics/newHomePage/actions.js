import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { callErrorFunc } from '../../../services/helpers';
import types from '../../types';

export function* getMarkets() {
  try {
    const { data, status } = yield call(api.home.getMarkets);

    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    yield put({ type: types.GET_MARKETS_DATA_SUCCESS, payload: data });
  } catch (error) {
    if (error?.response?.status === 401) return;

    yield put({ type: types.GET_MARKETS_DATA_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherGetMarkets() {
  yield takeLatest(types.GET_MARKETS_DATA_START, getMarkets);
}
