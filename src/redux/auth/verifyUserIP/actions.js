/* eslint-disable no-console */
import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import notification from '../../../services/notification';
import routes from '../../../routes';

function* verifyUserIP({ payload }) {
  try {
    const { data, status } = yield call(api.auth.verifyUserIP, {
      code: payload.code,
      email: payload.email,
    });
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.VERIFY_USER_IP_SUCCESS, payload: data });
    notification({
      title: 'Verify IP',
      type: 'success',
      message: 'You succesfully verified your IP',
    });
    payload.history.push(routes.Auth.Login.path);
    // yield put({
    //   type: types.LOGIN_START,
    //   payload: { loginData: payload.loginData },
    // });
  } catch (error) {
    console.dir(error);
    yield put({ type: types.VERIFY_USER_IP_FAILURE });
    if (error?.response?.status === 401) return;
    if (error?.response?.data?.errors.includes('invalid_verification_code')) {
      notification({
        title: 'Verify IP',
        type: 'error',
        message: 'You entered wrong code. Try again.',
      });
    }
  }
}

export function* watcherVerifyUserIP() {
  yield takeLatest(types.VERIFY_USER_IP_START, verifyUserIP);
}

function* recentCode({ payload }) {
  try {
    const { data, status } = yield call(api.auth.recentCode, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.RECENT_CODE_SUCCESS, payload: data });
    notification({
      title: 'Verify IP',
      type: 'success',
      message: 'Check email',
    });
  } catch (error) {
    yield put({ type: types.RECENT_CODE_FAILURE });
    if (error?.response?.status === 401) return;
    console.dir(error);
  }
}

export function* watcherRecentCode() {
  yield takeLatest(types.RECENT_CODE_START, recentCode);
}
