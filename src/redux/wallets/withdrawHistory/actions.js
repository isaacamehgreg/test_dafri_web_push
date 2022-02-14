import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';

export function* getFiatWithdrawHistory({ payload }) {
  try {
    const { data, status } = yield call(
      api.withdraw.getFiatWithdrawHistory,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_FIAT_WITHDRAW_HISTORY_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.GET_FIAT_WITHDRAW_HISTORY_FAILURE });
  }
}

export function* watcherGetFiatWithdrawHistory() {
  yield takeLatest(
    types.GET_FIAT_WITHDRAW_HISTORY_START,
    getFiatWithdrawHistory,
  );
}

export function* getCryptoWithdrawHistory({ payload }) {
  try {
    const { data, status } = yield call(
      api.withdraw.getCryptoWithdrawHistory,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    // const data = [
    //   {
    //     amount: '10.00000000',
    //     created_at: 1623087654,
    //     status: 'processed',
    //     asset_name: 'btc',
    //     asset_id: 2,
    //     icon: '/storage/assets/btc.png',
    //     type: 'crypto',
    //     information: 'adress',
    //     payment_system: null,
    //   },
    //   {
    //     amount: '10.00000000',
    //     created_at: 1623001254,
    //     status: 'processed',
    //     asset_name: 'btc',
    //     asset_id: 2,
    //     icon: '/storage/assets/btc.png',
    //     type: 'crypto',
    //     information: 'adress',
    //     payment_system: null,
    //   },
    //   {
    //     amount: '10.00000000',
    //     created_at: 1622914854,
    //     status: 'processed',
    //     asset_name: 'btc',
    //     asset_id: 2,
    //     icon: '/storage/assets/btc.png',
    //     type: 'crypto',
    //     information: 'adress',
    //     payment_system: null,
    //   },
    // ];

    yield put({
      type: types.GET_CRYPTO_WITHDRAW_HISTORY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: types.GET_CRYPTO_WITHDRAW_HISTORY_FAILURE });
  }
}

export function* watcherGetCryptoWithdrawHistory() {
  yield takeLatest(
    types.GET_CRYPTO_WITHDRAW_HISTORY_START,
    getCryptoWithdrawHistory,
  );
}
