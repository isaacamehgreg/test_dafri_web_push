import { takeLatest, call, put } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import notification from '../../../../services/notification';

export function* getAssetPaymentMethods() {
  try {
    const { data, status } = yield call(api.settings.getAssetPaymentMethods);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_PAYMENT_METHODS_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.GET_PAYMENT_METHODS_FAILURE });
    notification({
      type: 'error',
      timeOut: 5000,
      message: 'Error load payment methods data',
    });
  }
}

export function* watcherGetAssetPaymentMethods() {
  yield takeLatest(types.GET_PAYMENT_METHODS_START, getAssetPaymentMethods);
}
