/* eslint-disable no-console */
import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import notification from '../../../services/notification';
import routes from '../../../routes';

export function* postResetPassword({ payload }) {
  try {
    const { data, status } = yield call(api.auth.resetPassword, payload.values);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.RESET_PASSWORD_SUCCESS, payload: data });
    notification({
      title: 'Reset Pass',
      type: 'success',
      message: 'Password reset link has been sent to your email.',
    });
    payload.history.push(routes.Auth.Login.path);
  } catch (error) {
    console.dir(error);
    yield put({ type: types.RESET_PASSWORD_FAILURE });
    if (error?.response?.status === 401) return;
    if (
      error?.response?.data?.errors?.totp?.includes(
        'the_totp_field_is_required',
      )
    ) {
      notification({
        title: 'Reset Pass',
        type: 'error',
        message: 'Google Authenticator code (2FA) is required',
      });
    } else {
      if (error?.response?.data?.errors?.includes('invalid_credentials')) {
        notification({
          title: 'Reset Pass',
          type: 'error',
          message: 'Error. This e-mail is not registered',
        });
      }
      if (error?.response?.data?.errors?.includes('model_not_found')) {
        notification({
          title: 'Reset Pass',
          type: 'error',
          message: 'You entered incorrect e-mail',
        });
      }
    }
  }
}

export function* watcherResetPassword() {
  yield takeLatest(types.RESET_PASSWORD_START, postResetPassword);
}
