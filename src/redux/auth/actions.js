/* eslint-disable no-console */
import { put, takeLatest, call, all } from 'redux-saga/effects';
import types from '../types';
import api from '../../services/api';
import notification from '../../services/notification';
import routes from '../../routes';

function* postLogin({ payload }) {
  try {
    const { data, status } = yield call(api.auth.login, payload.data);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    if (payload?.data?.phone && payload.data.phone.replace('+', '')) {
      payload.history.push(routes.Auth.SecurityCheck.path, {
        phone: payload.data.phone,
        password: payload.data.password,
      });
    }
    yield put({ type: types.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.dir(error);
    yield put({ type: types.LOGIN_FAILURE });

    if (error?.response?.status === 401) return;
    if (error?.response?.data?.errors[0]?.includes('invalid_credentials')) {
      notification({
        type: 'error',
        title: 'Sign In',
        message: 'Email or password are wrong',
      });
    }
    if (error?.response?.data?.errors[0]?.includes('email_not_confirmed')) {
      notification({
        type: 'error',
        title: 'Sign In',
        message: 'Your email is not verified',
      });
    }
    if (error?.response?.data?.errors[0]?.includes('user_blocked')) {
      notification({
        type: 'error',
        title: 'Sign In',
        message: 'Your account blocked!',
      });
    }
    if (error?.response?.data?.errors[0]?.includes('invalid_totp_code')) {
      notification({
        type: 'error',
        title: 'Sign In',
        message: 'The totp field is invalid',
      });
    }

    if (
      error?.response?.data?.errors[0]?.includes(
        'user_need_change_password_check_your_email',
      )
    ) {
      notification({
        type: 'error',
        title: 'Sign In',
        message: 'You need to change password. Check your email',
      });
    }

    if (
      error?.response?.data?.errors?.totp?.includes(
        'the_totp_field_is_required',
      )
    ) {
      notification({
        type: 'error',
        title: 'Sign In',
        message: '2FA code is required',
      });
    }
  }
}

function* logout({ payload }) {
  try {
    if (payload.type === 'back') {
      const { status } = yield call(api.auth.logout);
      if (status < 200 || status >= 300)
        throw new Error('Something went wrong');
      payload.history.replace(routes.Auth.Login.path);
    } else if (payload.type === 'logout') {
      const { status } = yield call(api.auth.logout);
      if (status < 200 || status >= 300)
        throw new Error('Something went wrong');
    } else {
      payload.history.replace(routes.Auth.Login.path);
    }

    yield put({ type: types.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: types.LOGOUT_FAILURE });
    if (error?.response?.status === 401) return;
    // notification({ type: 'error', message: 'Something went wrong' });
  }
}

function* putConfirmEmail({ payload }) {
  try {
    const { data, status } = yield call(api.auth.confirmEmail, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.CONFIRM_EMAIL_SUCCESS, payload: data });
    notification({
      type: 'success',
      message: 'Your email has been successfully confirmed',
    });
  } catch (error) {
    console.dir(error);
    yield put({ type: types.CONFIRM_EMAIL_FAILURE });
    if (error?.response?.status === 401) return;
    // notification({ type: 'error', message: 'Something went wrong' });
  }
}

function* postLoginBySms({ payload, history }) {
  try {
    const { data, status } = yield call(api.auth.loginBySms, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({
      type: types.LOGIN_BY_SMS_SUCCESS,
    });
    yield put({ type: types.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: types.LOGIN_BY_SMS_FAILURE,
    });
    if (error?.response?.status === 401) return;

    if (error?.response?.data?.errors?.includes('sms_is_expired')) {
      notification({
        type: 'error',
        title: 'Login',
        message: 'Sms code is wrong or expired',
      });
      history.push(routes.Auth.ConfirmMobilePhone.path, {
        phone: payload.phone,
        password: payload.password,
      });
    }
    // console.log(error);
    // notification({ type: 'error', message: 'Something went wrong' });
  }
}

function* postResendLoginSmsCode({ payload }) {
  try {
    const { data, status } = yield call(
      api.auth.postResendLoginSmsCode,
      payload,
    );
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({
      type: types.POST_RESEND_SMS_CODE_SUCCESS,
    });
  } catch (error) {
    yield put({ type: types.POST_RESEND_SMS_CODE_FAILURE });
    if (error?.response?.status === 401) return;
    // notification({ type: 'error', message: 'Something went wrong' });
  }
}

function* getRefreshToken() {
  try {
    const { data, status } = yield call(api.auth.refreshToken);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({
      type: types.GET_REFRESH_TOKEN_SUCCESS,
      payload: { token: data.token, last_login: data.token_expired_at },
    });
  } catch (error) {
    yield put({ type: types.GET_REFRESH_TOKEN_FAILURE });
    if (error?.response?.status === 401) return;
    // notification({ type: 'error', message: 'Something went wrong' });
  }
}

function* updateToken({ payload }) {
  try {
    yield put({
      type: types.UPDATE_USER_TOKEN_SUCCESS,
      payload,
    });
  } catch (error) {
    if (error?.response?.status === 401) return;
    console.log(error);
    // notification({ type: 'error', message: 'Something went wrong' });
  }
}

export function* rootSagaAuth() {
  yield all([
    takeLatest(types.CONFIRM_EMAIL_START, putConfirmEmail),
    takeLatest(types.LOGOUT_START, logout),
    takeLatest(types.LOGIN_START, postLogin),
    takeLatest(types.LOGIN_BY_SMS_START, postLoginBySms),
    takeLatest(types.GET_REFRESH_TOKEN_START, getRefreshToken),
    takeLatest(types.POST_RESEND_SMS_CODE_START, postResendLoginSmsCode),
    takeLatest(types.UPDATE_USER_TOKEN_START, updateToken),
  ]);
}
