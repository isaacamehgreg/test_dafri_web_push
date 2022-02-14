import { takeLatest, call, put } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import { callErrorFunc } from '../../../../services/helpers';
import notification from '../../../../services/notification';

export function* generateBankRequest({ payload }) {
  try {
    const { data, status } = yield call(
      api.deposit.generateBankRequest,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.CREATE_BANK_REQUEST_SUCCESS, payload: data });
  } catch (e) {
    callErrorFunc(e?.response?.data?.errors);
    yield put({ type: types.CREATE_BANK_REQUEST_FAILURE });
  }
}

export function* watcherGenerateBankRequest() {
  yield takeLatest(types.CREATE_BANK_REQUEST_START, generateBankRequest);
}

export function* sendBankRequizitesToEmail({ payload, message }) {
  try {
    const { data, status } = yield call(
      api.deposit.sendBankRequizitesToEmail,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    notification({
      type: 'info',
      timeOut: 5000,
      message,
    });
  } catch (e) {
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherSendBankRequizitesToEmail() {
  yield takeLatest(
    types.SEND_BANK_INFO_TO_EMAIL_START,
    sendBankRequizitesToEmail,
  );
}
