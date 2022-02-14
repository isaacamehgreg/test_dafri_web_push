/* eslint-disable no-console */
import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import notification from '../../../services/notification';
import { callErrorFunc } from '../../../services/helpers';

export function* postReset2FA({ payload }) {
  try {
    const { data, status } = yield call(api.auth.reset2FA, {
      ...payload,
    });

    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    yield put({ type: types.RESET_2FA_SEND_FORM_SUCCESS, payload: data });

    // yield put({
    //   type: types.UPLOAD_SELFI_RESET_2FA_START,
    //   payload: { file: payload.selfi, email: payload.email },
    // });

    notification({
      title: 'Reset 2FA',
      type: 'success',
      message: 'Your reset request has been sent',
    });
  } catch (error) {
    console.dir(error);

    yield put({ type: types.RESET_2FA_SEND_FORM_FAILURE });

    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* postUploadSelfie({ payload }) {
  try {
    const { data, status } = yield call(api.auth.uploadSelfi, payload);

    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.UPLOAD_SELFI_RESET_2FA_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.UPLOAD_SELFI_RESET_2FA_FAILURE });

    if (error?.response?.data?.errors.includes('already_exist')) {
      notification({
        title: 'Reset 2FA',
        type: 'error',
        message: 'Request to reset TOTP was already sent',
      });
    }
    if (error?.response?.data?.errors.includes('2fa_already_disabled')) {
      notification({
        title: 'Reset 2FA',
        type: 'error',
        message: 'Your 2FA has already been reset',
      });
    }
    if (error?.response?.data?.errors.includes('model_not_found')) {
      notification({
        title: 'Reset 2FA',
        type: 'error',
        message: 'This email is not registered',
      });
    }
  }
}

export function* watcherReset2FA() {
  yield takeLatest(types.RESET_2FA_SEND_FORM_START, postReset2FA);
}

export function* watcherUploadSelfie() {
  yield takeLatest(types.UPLOAD_SELFI_RESET_2FA_START, postUploadSelfie);
}
