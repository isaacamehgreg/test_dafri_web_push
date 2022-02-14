import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import notification from '../../../../services/notification';
import { callErrorFunc } from '../../../../services/helpers';

export function* generateGoogleSecretCode() {
  try {
    const { data, status } = yield call(api.settings.googleGenerateSecretKey);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GENERATE_GOOGLE_SECRET_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.GENERATE_GOOGLE_SECRET_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherGenerateGoogleSecretCode() {
  yield takeLatest(
    types.GENERATE_GOOGLE_SECRET_START,
    generateGoogleSecretCode,
  );
}

export function* enable2FA({ payload }) {
  try {
    const { data, status } = yield call(api.settings.googleEnable2FA, {
      totp: payload,
    });

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    notification({
      type: 'success',
      timeOut: 5000,
      message: 'You successfully enable Google 2FA',
    });

    yield put({ type: types.ENABLE_GOOGLE_2FA_SUCCESS, payload: data });
    yield put({ type: types.GET_USER_DATA_START });
  } catch (error) {
    yield put({ type: types.ENABLE_GOOGLE_2FA_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherEnable2FA() {
  yield takeLatest(types.ENABLE_GOOGLE_2FA_START, enable2FA);
}

export function* disable2FA({ payload }) {
  try {
    const { data, status } = yield call(api.settings.googleDisable2FA, {
      totp: payload,
    });

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    notification({
      type: 'success',
      timeOut: 5000,
      message: 'You successfully disable Google 2FA',
    });

    yield put({ type: types.DISABLE_GOOGLE_2FA_SUCCESS, payload: data });
    yield put({ type: types.GET_USER_DATA_START });
  } catch (error) {
    yield put({ type: types.DISABLE_GOOGLE_2FA_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherDisable2FA() {
  yield takeLatest(types.DISABLE_GOOGLE_2FA_START, disable2FA);
}
