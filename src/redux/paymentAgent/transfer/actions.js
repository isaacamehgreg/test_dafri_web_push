import { put, takeLatest, call } from 'redux-saga/effects';
import api from '../../../services/api';
import types from '../../types';
import { callErrorFunc } from '../../../services/helpers';

export function* getPaymentAgentTransferlList({ payload }) {
  try {
    const { data, status } = yield call(
      api.paymentAgent.getPaymentAgentTransferlList,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.GET_PAYMENT_AGENT_TRANSFER_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: types.GET_PAYMENT_AGENT_TRANSFER_LIST_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherGetPaymentAgentTransferlList() {
  yield takeLatest(
    types.GET_PAYMENT_AGENT_TRANSFER_LIST_START,
    getPaymentAgentTransferlList,
  );
}
