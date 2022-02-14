import { takeLatest, call, put } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import { callErrorFunc } from '../../../../services/helpers';

export function* generateDafribankRequest({ payload }) {
  try {
    const { data, status } = yield call(
      api.deposit.generateDafribankRequest,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.MAKE_DAFRIBANK_PAYMENT_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.MAKE_DAFRIBANK_PAYMENT_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherGenerateDafribankRequest() {
  yield takeLatest(
    types.MAKE_DAFRIBANK_PAYMENT_START,
    generateDafribankRequest,
  );
}
