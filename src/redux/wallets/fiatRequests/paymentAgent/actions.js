// paymentAgent
import { takeLatest, call, put } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import notification from '../../../../services/notification';
import { closeModal } from '../../../../components/Base/Modal';
import { callErrorFunc } from '../../../../services/helpers';

export function* createPaymentAgentFiatDeposit({ payload, resetForm }) {
  try {
    const { status } = yield call(
      api.deposit.createPaymentAgentFiatDeposit,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.CREATE_PAYMENT_AGENT_DEPOSIT_FIAT_SUCCESS,
    });

    resetForm();
    closeModal();

    notification({
      type: 'success',
      timeOut: 5000,
      message: 'Deposit has been successfully completed.',
    });
  } catch (e) {
    yield put({ type: types.CREATE_PAYMENT_AGENT_DEPOSIT_FIAT_FAILURE });
    callErrorFunc(e?.response?.data?.errors, 8000);
  }
}

export function* watcherCreatePaymentAgentFiatDeposit() {
  yield takeLatest(
    types.CREATE_PAYMENT_AGENT_DEPOSIT_FIAT_START,
    createPaymentAgentFiatDeposit,
  );
}
