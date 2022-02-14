import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';

export function* getWitdrawalHistory({ payload }) {
  try {
    const { data, status } = yield call(
      api.history.getWithdrawalHistory,
      payload,
    );
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.GET_WITHDRAWAL_HISTORY_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_WITHDRAWAL_HISTORY_FAILURE });
  }
}

export function* watcherGetWitdrawalHistory() {
  yield takeLatest(types.GET_WITHDRAWAL_HISTORY_START, getWitdrawalHistory);
}
