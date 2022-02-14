import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';

function* getUser() {
  try {
    const { data, status } = yield call(api.settings.getUser);

    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    yield put({
      type: types.GET_USER_DATA_SUCCESS,
      payload: { ...data.user_data, current_ip: data.current_ip },
    });
  } catch (error) {
    yield put({ type: types.GET_USER_DATA_FAILURE });
  }
}

export function* watcherGetUser() {
  yield takeLatest(types.GET_USER_DATA_START, getUser);
}
