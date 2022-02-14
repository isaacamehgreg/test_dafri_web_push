import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../types';
import api from '../../services/api';
import notification from '../../services/notification';
import { callErrorFunc } from '../../services/helpers';

export function* getPublicPaymentAgentsList({ payload }) {
  try {
    const { data, status } = yield call(
      api.paymentAgent.getPublicPaymentAgents,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.GET_PUBLIC_PAYMENT_AGENTS_LIST_SUCCESS,
      payload: data?.data,
    });
  } catch (e) {
    callErrorFunc(e.response.data.errors);

    yield put({ type: types.GET_PUBLIC_PAYMENT_AGENTS_LIST_FAILURE });
  }
}

export function* watcherGetPublicPaymentAgentsList() {
  yield takeLatest(
    types.GET_PUBLIC_PAYMENT_AGENTS_LIST_START,
    getPublicPaymentAgentsList,
  );
}

export function* getPrivatePaymentAgentsList({ payload }) {
  try {
    const { data, status } = yield call(
      api.paymentAgent.getPrivatePaymentAgents,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.GET_PRIVATE_PAYMENT_AGENTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    callErrorFunc(e.response.data.errors);

    yield put({ type: types.GET_PRIVATE_PAYMENT_AGENTS_LIST_FAILURE });
  }
}

export function* watcherGetPrivatePaymentAgentsList() {
  yield takeLatest(
    types.GET_PRIVATE_PAYMENT_AGENTS_LIST_START,
    getPrivatePaymentAgentsList,
  );
}

export function* calculatePaymentAgentCommission({ payload }) {
  try {
    const { data, status } = yield call(
      api.paymentAgent.calculatePaymentAgentCommission,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.CALCULATE_PAYMENT_AGENT_COMMISSION_SUCCESS,
      payload: {
        type: payload?.type === 'withdraw_fee' ? 'withdraw' : 'deposit',
        data,
      },
    });
  } catch (e) {
    callErrorFunc(e.response.data.errors);

    yield put({ type: types.CALCULATE_PAYMENT_AGENT_COMMISSION_FAILURE });
  }
}

export function* watcherCalculatePaymentAgentCommission() {
  yield takeLatest(
    types.CALCULATE_PAYMENT_AGENT_COMMISSION_START,
    calculatePaymentAgentCommission,
  );
}

export function* registerPaymentAgent({ payload, resetForm }) {
  try {
    const { data, status } = yield call(
      api.paymentAgent.registerPaymentAgent,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    resetForm();

    notification({
      type: 'success',
      timeOut: 5000,
      message: 'Your request has been sent successfully',
    });
  } catch (e) {
    callErrorFunc(e.response.data.errors);

    yield put({ type: types.REGISTER_PAYMENT_AGENT_FAILURE });
  }
}

export function* watcherRegisterPaymentAgent() {
  yield takeLatest(types.REGISTER_PAYMENT_AGENT_START, registerPaymentAgent);
}

export function* getSinglePaymentAgent({ payload }) {
  try {
    const { data, status } = yield call(
      api.paymentAgent.getSinglePaymentAgent,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_SINGLE_PAYMENT_AGENT_SUCCESS, payload: data });
  } catch (e) {
    callErrorFunc(e.response.data.errors);

    yield put({ type: types.GET_SINGLE_PAYMENT_AGENT_FAILURE });
  }
}

export function* watcherGetSinglePaymentAgent() {
  yield takeLatest(types.GET_SINGLE_PAYMENT_AGENT_START, getSinglePaymentAgent);
}

export function* getCountriesData() {
  try {
    const { data, status } = yield call(api.paymentAgent.getCountriesData);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_COUNTRIES_DATA_SUCCESS, payload: data });
  } catch (e) {
    callErrorFunc(e.response.data.errors);
    yield put({ type: types.GET_COUNTRIES_DATA_FAILURE });
  }
}

export function* watcherGetCountries() {
  yield takeLatest(types.GET_COUNTRIES_DATA_START, getCountriesData);
}
