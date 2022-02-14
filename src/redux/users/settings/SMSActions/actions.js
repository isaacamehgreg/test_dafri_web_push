import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import notification from '../../../../services/notification';
import { callErrorFunc } from '../../../../services/helpers';

export function* getSMSCode({ payload }) {
  try {
    const { data, status } = yield call(api.settings.getSMS, payload);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_SMS_CODE_SUCCESS, payload: data });

    notification({
      type: 'Success',
      timeOut: 5000,
      message: `SMS code has been sent to your number`,
    });
  } catch (error) {
    yield put({ type: types.GET_SMS_CODE_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherGetSMSCode() {
  yield takeLatest(types.GET_SMS_CODE_START, getSMSCode);
}

export function* getEmailCode({ payload }) {
  try {
    const { data, status } = yield call(api.settings.getSMS, payload);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_EMAIL_CODE_SUCCESS, payload: data });

    notification({
      type: 'Success',
      timeOut: 5000,
      message: `Email code has been sent to your email`,
    });
  } catch (error) {
    yield put({ type: types.GET_EMAIL_CODE_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherGetEmailCode() {
  yield takeLatest(types.GET_EMAIL_CODE_START, getEmailCode);
}

export function* enable2FAPhone({ payload }) {
  try {
    const { data, status } = yield call(api.settings.enable2FAPhone, {
      ...payload,
    });

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    notification({
      type: 'success',
      timeOut: 5000,
      message: 'SMS Authentication was successfully enabled',
    });

    yield put({ type: types.ENABLE_2FA_PHONE_SUCCESS });
    yield put({ type: types.GET_USER_DATA_START });
  } catch (error) {
    yield put({ type: types.ENABLE_2FA_PHONE_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherEnable2FAPhone() {
  yield takeLatest(types.ENABLE_2FA_PHONE_START, enable2FAPhone);
}

export function* disable2FAPhone({ payload }) {
  try {
    const { data, status } = yield call(api.settings.disable2FAPhone, {
      ...payload,
    });

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    notification({
      type: 'success',
      timeOut: 5000,
      message: 'SMS Authentication was successfully disabled',
    });

    yield put({ type: types.DISABLE_2FA_PHONE_SUCCESS });
    yield put({ type: types.GET_USER_DATA_START });
  } catch (error) {
    yield put({ type: types.DISABLE_2FA_PHONE_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherDisable2FAPhone() {
  yield takeLatest(types.DISABLE_2FA_PHONE_START, disable2FAPhone);
}
