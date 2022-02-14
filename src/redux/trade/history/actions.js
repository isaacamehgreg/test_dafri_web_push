import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';

export function* clearAllHistory() {
  try {
    yield put({ type: types.CLEAR_ALL_HISTORY_SUCCESS });
  } catch (error) {
    yield put({ type: types.CLEAR_ALL_HISTORY_FAILURE });
  }
}

export function* watcherClearAllHistory() {
  yield takeLatest(types.CLEAR_ALL_HISTORY_START, clearAllHistory);
}
