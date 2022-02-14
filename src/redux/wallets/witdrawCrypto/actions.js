import React from 'react';
import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import { closeModal, openModal } from '../../../components/Base/Modal';
import WithdrawError from '../../../components/Base/Modals/Users/Withdraw/WithdrawError';
import WithdrawSuccess from '../../../components/Base/Modals/Users/Withdraw/WithdrawSuccess';
import { callErrorFunc } from '../../../services/helpers';

export function* postCryptoWithdraw({
  payload,
  assetCode,
  resetWithdrawFields,
}) {
  try {
    const { data, status } = yield call(
      api.withdraw.postCryptoWithdraw,
      payload,
    );
    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.POST_CRYPTO_WITHDRAW_SUCCESS, payload: data });
    yield put({ type: types.GET_USER_DATA_START });

    closeModal();

    resetWithdrawFields(true);

    openModal(() => (
      <WithdrawSuccess
        amount={payload?.amount}
        address={payload?.address}
        assetCode={assetCode}
      />
    ));
  } catch (e) {
    yield put({ type: types.POST_CRYPTO_WITHDRAW_FAILURE });

    callErrorFunc(e?.response?.data?.errors);

    openModal(() => (
      <WithdrawError
        amount={payload?.amount}
        address={payload?.address}
        assetCode={assetCode}
      />
    ));
  }
}

export function* watcherPostCryptoWithdraw() {
  yield takeLatest(types.POST_CRYPTO_WITHDRAW_START, postCryptoWithdraw);
}

export function* getWithdrawAmountInUsd({ payload }) {
  try {
    const { data, status } = yield call(
      api.withdraw.getWithdrawAmountInUsd,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.GET_WITHDRAW_AMOUNT_IN_USD_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: types.GET_WITHDRAW_AMOUNT_IN_USD_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherGetWithdrawAmountInUsd() {
  yield takeLatest(
    types.GET_WITHDRAW_AMOUNT_IN_USD_START,
    getWithdrawAmountInUsd,
  );
}
