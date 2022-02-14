/* eslint-disable no-console */
import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import notification from '../../../services/notification';
import routes from '../../../routes';

export function* Signup({ payload }) {
  try {
    const { data, status } = yield call(api.auth.signup, payload.data);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.SIGNUP_SUCCESS, payload: data });
    notification({
      type: 'success',
      title: 'Sign Up',
      message: 'You have registered successfully. Check your e-mail',
    });
    payload.history.push({
      pathname: routes.Auth.Login.path,
    });
  } catch (error) {
    console.dir(error);
    yield put({ type: types.SIGNUP_FAILURE });
    if (error?.response?.status === 401) return;
    if (
      error?.response?.data?.errors?.email?.includes(
        'the_email_has_already_been_taken',
      )
    ) {
      notification({
        type: 'error',
        title: 'Sign Up',
        message: 'Error. This e-mail is already registered',
      });
    }
    if (error?.response?.data?.errors[0]?.includes('registration_error')) {
      notification({
        type: 'error',
        title: 'Sign Up',
        message: 'registration_error',
      });
    }
    if (
      error?.response?.data?.errors?.captcha?.includes('validationrecaptcha')
    ) {
      notification({
        type: 'error',
        title: 'Sign Up',
        message: 'validationrecaptcha',
      });
    }
  }
}

export function* watcherSignup() {
  yield takeLatest(types.SIGNUP_START, Signup);
}
