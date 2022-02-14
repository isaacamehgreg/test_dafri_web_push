/* eslint-disable no-console */
import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import notification from '../../../services/notification';
import routes from '../../../routes';

export function* putChangePassword({ payload }) {
  try {
    const { data, status } = yield call(api.auth.changePassword, {
      password: payload.password,
      c_password: payload.password_confirm,
      token: payload.token,
    });
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.CHANGE_PASSWORD_SUCCESS, payload: data });
    notification({
      type: 'success',
      message: 'Success. You have changed the password successfully',
    });
    payload.history.push(routes.Auth.Login.path);
  } catch (error) {
    yield put({ type: types.CHANGE_PASSWORD_FAILURE });
    if (error?.response?.status === 401) return;
    console.dir(error);
  }
}

export function* putChangeUserPassword({ payload }) {
  try {
    const { data, status } = yield call(
      api.auth.changeUserPassword,
      payload.values,
    );
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.CHANGE_PASSWORD_SUCCESS, payload: data });
    notification({
      type: 'success',
      message: 'Success. You have changed the password successfully',
    });
    payload.history.push(routes.Root.path);
  } catch (error) {
    yield put({ type: types.CHANGE_PASSWORD_FAILURE });
    if (error?.response?.status === 401) return;
    if (
      error?.response?.data?.errors?.old_password?.includes(
        `old_password_didn't_match`,
      )
    ) {
      notification({
        type: 'error',
        title: 'Login',
        message: 'Old password is not correct!',
      });
    }
    if (
      error?.response?.data?.errors?.old_password?.includes(
        'the_old_password_and_password_must_be_different',
      )
    ) {
      notification({
        type: 'error',
        title: 'Login',
        message: 'The old password and new must be different!',
      });
    }
    if (
      error?.response?.data?.errors?.old_password?.includes(
        'the_c_password_and_password_must_match',
      )
    ) {
      notification({
        type: 'error',
        title: 'Login',
        message: 'Password does not match',
      });
    }
  }
}

export function* watcherChangePassword() {
  yield takeLatest(types.CHANGE_PASSWORD_START, putChangePassword);
}

export function* watcherChangeUserPassword() {
  yield takeLatest(types.CHANGE_USER_PASSWORD_START, putChangeUserPassword);
}
