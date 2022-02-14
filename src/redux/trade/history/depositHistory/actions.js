import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';

export function* getDepositHistory({ payload }) {
  try {
    const { data, status } = yield call(api.history.getDepositHistory, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.GET_DEPOSIT_HISTORY_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_DEPOSIT_HISTORY_FAILURE });
  }
}

export function* watcherGetDepositHistory() {
  yield takeLatest(types.GET_DEPOSIT_HISTORY_START, getDepositHistory);
}
