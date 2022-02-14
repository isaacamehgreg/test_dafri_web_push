import { takeLatest, call, put, select } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import types from '../../../types';
import api from '../../../../services/api';
import notification from '../../../../services/notification';
import { circlePublicKeySelector } from '../../selectors';
import { fetchEncryptedData } from '../../../../services/encodeCard';
import { closeModal } from '../../../../components/Base/Modal/index';
import { callErrorFunc } from '../../../../services/helpers';

export function* getCirclePublicKey() {
  try {
    const { data, status } = yield call(api.deposit.getCirclePublicKey);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_CIRCLE_PUBLIC_KEY_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.GET_CIRCLE_PUBLIC_KEY_FAILURE });
  }
}

export function* watcherGetCirclePublicKey() {
  yield takeLatest(types.GET_CIRCLE_PUBLIC_KEY_START, getCirclePublicKey);
}

export function* createCircleCard({ payload, assetID, cardData, cvvData }) {
  try {
    const { data, status } = yield call(api.deposit.createCircleCard, payload);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    if (data?.errors?.length) {
      if (data.errors) {
        callErrorFunc(data.errors);
      }
    } else if (data.code) {
      notification({
        type: 'error',
        timeOut: 7500,
        message: data.message || data.errors.message,
      });
    }

    yield put({
      type: types.CREATE_CIRCLE_CARD_SUCCESS,
      payload: data?.data?.id,
    });

    const paymentPayload = {
      amount: payload.amount,
      asset_id: assetID,
      idempotency_key: uuidv4(),
      email: payload.email,
      session_id: payload.session_id,
      card_id: data?.data?.id,
      type: 'card',
      verification: 'cvv',
    };

    yield put({
      type: types.CREATE_CIRCLE_PAYMENT_START,
      payload: paymentPayload,
      cardData,
      cvvData,
    });
  } catch (error) {
    yield put({ type: types.CREATE_CIRCLE_CARD_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherCreateCircleCard() {
  yield takeLatest(types.CREATE_CIRCLE_CARD_START, createCircleCard);
}

export function* createCirclePayment({ payload, cardData, cvvData }) {
  try {
    yield call(getCirclePublicKey);

    const circlePublicKey = yield select(circlePublicKeySelector);

    const encryptedData = yield call(
      fetchEncryptedData,
      circlePublicKey,
      cardData,
      cvvData,
    );

    const { data, status } = yield call(api.deposit.makeCirclePayment, {
      ...payload,
      encrypted_data: encryptedData,
      key_id: circlePublicKey?.keyId,
    });

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.CREATE_CIRCLE_PAYMENT_SUCCESS });

    if (data?.status === 'success') {
      notification({
        type: 'success',
        timeOut: 5000,
        message: 'Payment has been successfully',
      });

      closeModal();
    }
  } catch (error) {
    yield put({ type: types.CREATE_CIRCLE_PAYMENT_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherCreateCirclePayment() {
  yield takeLatest(types.CREATE_CIRCLE_PAYMENT_START, createCirclePayment);
}
