import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import { callErrorFunc } from '../../../services/helpers';

export function* generateCoinAdress({ payload }) {
  try {
    const { data, status } = yield call(
      api.deposit.generateCoinAdress,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GENERATE_COIN_ADRESS_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.GENERATE_COIN_ADRESS_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherGenerateCoinAdress() {
  yield takeLatest(types.GENERATE_COIN_ADRESS_START, generateCoinAdress);
}
