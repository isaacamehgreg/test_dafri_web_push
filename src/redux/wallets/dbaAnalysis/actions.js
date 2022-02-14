import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';

export function* getDBAAnalysis({ payload }) {
  try {
    const { data, status } = yield call(
      api.lockedToken.getDBAAnalysis,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_DBA_ANALYSIS_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.GET_DBA_ANALYSIS_FAILURE });
  }
}

export function* watcherGetDBAAnalysis() {
  yield takeLatest(types.GET_DBA_ANALYSIS_START, getDBAAnalysis);
}
