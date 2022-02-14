import { put, takeLatest, call, select } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import notification from '../../../services/notification';
import { closeModal } from '../../../components/Base/Modal';
import { callErrorFunc } from '../../../services/helpers';

export function* postFiatBanksWithdraw({ payload, resetWithdrawFields }) {
  try {
    const { data, status } = yield call(
      api.withdraw.postFiatBanksWithdraw,
      payload,
    );
    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.POST_FIAT_BANKS_WITHDRAW_SUCCESS });
    yield put({ type: types.GET_USER_DATA_START });

    closeModal();
    resetWithdrawFields(true);

    notification({
      type: 'Success',
      timeOut: 5000,
      message: 'You withdrawal operation has been successfully',
    });
  } catch (e) {
    yield put({ type: types.POST_FIAT_BANKS_WITHDRAW_FAILURE });

    callErrorFunc(e?.response?.data?.errors);

    closeModal();
  }
}

export function* watcherPostFiatBanksWithdraw() {
  yield takeLatest(types.POST_FIAT_BANKS_WITHDRAW_START, postFiatBanksWithdraw);
}

export function* postPaymentAgentFiatBanksWithdraw({
  payload,
  resetWithdrawFields,
  debounceInputRef,
}) {
  try {
    const { data, status } = yield call(
      api.withdraw.postPaymentAgentFiatBanksWithdraw,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.POST_PAYMENT_AGENT_FIAT_BANKS_WITHDRAW_SUCCESS });
    yield put({ type: types.GET_USER_DATA_START });

    notification({
      type: 'Success',
      timeOut: 5000,
      message: 'You withdrawal operation has been successfully sended',
    });

    closeModal();

    resetWithdrawFields(true);
    debounceInputRef.current.value = '';
  } catch (e) {
    yield put({ type: types.POST_PAYMENT_AGENT_FIAT_BANKS_WITHDRAW_FAILURE });

    callErrorFunc(e?.response?.data?.errors);

    closeModal();
  }
}

export function* watcherPostPaymentAgentFiatBanksWithdraw() {
  yield takeLatest(
    types.POST_PAYMENT_AGENT_FIAT_BANKS_WITHDRAW_START,
    postPaymentAgentFiatBanksWithdraw,
  );
}
