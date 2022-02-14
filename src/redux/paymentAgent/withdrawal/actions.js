import { put, takeLatest, call } from 'redux-saga/effects';
import { closeModal } from '../../../components/Base/Modal';
import api from '../../../services/api';
import notification from '../../../services/notification';
import types from '../../types';
import { callErrorFunc } from '../../../services/helpers';

export function* getPaymentAgentWithdrawalList({ payload }) {
  try {
    const { data, status } = yield call(
      api.paymentAgent.getPaymentAgentWithdrawalList,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.GET_PAYMENT_AGENT_WITHDRAWAL_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    callErrorFunc(e.response.data.errors);

    yield put({ type: types.GET_PAYMENT_AGENT_WITHDRAWAL_LIST_FAILURE });
  }
}

export function* watcherGetPublicPaymentAgentWithdrawalList() {
  yield takeLatest(
    types.GET_PAYMENT_AGENT_WITHDRAWAL_LIST_START,
    getPaymentAgentWithdrawalList,
  );
}

export function* postPaymentAgentUpdateWithdrawalStatus({ payload }) {
  try {
    const { data, status } = yield call(
      api.paymentAgent.postPaymentAgentUpdateWithdrawalStatus,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.UPDATE_PAYMENT_AGENT_WITHDRAWAL_STATUS_SUCCESS,
      payload,
    });

    closeModal();

    notification({
      type: 'success',
      timeOut: 5000,
      message: `Withdrawal has been ${payload.operation_status}`,
    });
  } catch (e) {
    callErrorFunc(e.response.data.errors);

    yield put({ type: types.UPDATE_PAYMENT_AGENT_WITHDRAWAL_STATUS_FAILURE });
  }
}

export function* watcherPostPaymentAgentUpdateWithdrawalStatus() {
  yield takeLatest(
    types.UPDATE_PAYMENT_AGENT_WITHDRAWAL_STATUS_START,
    postPaymentAgentUpdateWithdrawalStatus,
  );
}
