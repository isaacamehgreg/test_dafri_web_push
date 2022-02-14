import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import { callErrorFunc } from '../../../../services/helpers';

export function* getLoginRecords() {
  try {
    const { data, status } = yield call(api.settings.getLoginRecords);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_LOGIN_RECORDS_SUCCESS, payload: data });
  } catch (e) {
    callErrorFunc(e?.response?.data?.errors);
    yield put({ type: types.GET_LOGIN_RECORDS_FAILURE });
  }
}

export function* watcherGetLoginRecords() {
  yield takeLatest(types.GET_LOGIN_RECORDS_START, getLoginRecords);
}
