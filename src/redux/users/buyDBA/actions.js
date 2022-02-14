import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import routes from '../../../routes';
import { callErrorFunc } from '../../../services/helpers';

function* getBuyDBAInformation() {
  try {
    const { data, status } = yield call(api.buyDBA.getBuyDBAInformation);

    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    yield put({
      type: types.GET_DBA_INFORMATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({ type: types.GET_DBA_INFORMATION_FAILURE });
  }
}

export function* watcherGetBuyDBAInformation() {
  yield takeLatest(types.GET_DBA_INFORMATION_START, getBuyDBAInformation);
}

function* checkDBA({ payload, history }) {
  try {
    const { data, status } = yield call(api.buyDBA.checkDBA, payload);

    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.CHECK_DBA_SUCCESS, payload: data });
    history.push(routes.Static.BuyDBAFormStep1.path);
  } catch (error) {
    yield put({ type: types.CHECK_DBA_SUCCESS });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherCheckDBA() {
  yield takeLatest(types.CHECK_DBA_START, checkDBA);
}

function* buyDBA({ payload }) {
  try {
    const { data, status } = yield call(api.buyDBA.buyDBA, payload);

    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({ type: types.BUY_DBA_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.CHECK_DBA_SUCCESS });
    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherBuyDBA() {
  yield takeLatest(types.BUY_DBA_START, buyDBA);
}
