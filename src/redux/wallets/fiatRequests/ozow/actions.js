import { takeLatest, call, put } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import { callErrorFunc } from '../../../../services/helpers';

export function* generateOzowRequest({ payload }) {
  try {
    const { data, status } = yield call(api.deposit.generateOzowRequest, {
      amount: payload,
    });

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.CREATE_OZOW_REQUEST_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.CREATE_OZOW_REQUEST_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherGenerateOzowRequest() {
  yield takeLatest(types.CREATE_OZOW_REQUEST_START, generateOzowRequest);
}
