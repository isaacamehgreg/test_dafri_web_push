/* eslint-disable no-console */
import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import notification from '../../../services/notification';
import { callErrorFunc } from '../../../services/helpers';

export function* sendContactUsForm({ payload }) {
  try {
    const { data, status } = yield call(api.support.postContactUs, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    notification({
      type: 'success',
      message: 'Success. Your message has been sent.',
    });

    yield put({ type: types.CONTACT_US_SEND_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.CONTACT_US_SEND_FAILURE });
    if (error?.response?.status === 401) return;

    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherSendContactUsForm() {
  yield takeLatest(types.CONTACT_US_SEND_START, sendContactUsForm);
}

export function* sendSupportForm({ payload }) {
  try {
    const { data, status } = yield call(api.support.postSupport, payload);
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.SEND_SUPPORT_DATA_SUCCESS, payload: data });
    notification({
      type: 'success',
      message: 'Success. Your message has been sent.',
    });
  } catch (error) {
    yield put({ type: types.SEND_SUPPORT_DATA_FAILURE });
    if (error?.response?.status === 401) return;

    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherSendSupportForm() {
  yield takeLatest(types.SEND_SUPPORT_DATA_START, sendSupportForm);
}
