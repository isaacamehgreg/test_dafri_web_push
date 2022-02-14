import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';

function* getSumSubToken() {
  try {
    const { data, status } = yield call(api.verification.getToken);

    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    yield put({
      type: types.GET_SUMSUB_TOKEN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({ type: types.GET_SUMSUB_TOKEN_FAILURE });
  }
}

export function* watcherGetSumSubToken() {
  yield takeLatest(types.GET_SUMSUB_TOKEN_START, getSumSubToken);
}
