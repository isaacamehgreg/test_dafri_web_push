import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import notification from '../../../services/notification';
import { callErrorFunc } from '../../../services/helpers';
import types from '../../types';

export function* editPaymentAgent({ payload }) {
  try {
    const { data, status } = yield call(
      api.paymentAgent.editPaymentAgent,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    notification({
      type: 'success',
      timeOut: 5000,
      message: 'Your data has been edited successfully',
    });
  } catch (e) {
    callErrorFunc(e.response.data.errors);

    yield put({ type: types.EDIT_PAYMENT_AGENT_FAILURE });
  }
}

export function* watcherEditPaymentAgent() {
  yield takeLatest(types.EDIT_PAYMENT_AGENT_START, editPaymentAgent);
}
