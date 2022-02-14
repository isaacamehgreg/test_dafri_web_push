import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';

function* getReferralInfo() {
  try {
    const { data, status } = yield call(api.affiliate.getReferralInfo);

    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    yield put({
      type: types.GET_REFERRAL_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({ type: types.GET_REFERRAL_INFO_FAILURE });
  }
}

export function* watcherGetReferralInfo() {
  yield takeLatest(types.GET_REFERRAL_INFO_START, getReferralInfo);
}

function* getListReferralDeductions({ payload }) {
  try {
    const { data, status } = yield call(
      api.affiliate.getListReferralDeductions,
      payload,
    );

    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    yield put({
      type: types.GET_LIST_REFERRAL_DEDUCTIONS_SUCCESS,
      payload: {
        data,
        type: payload.params.type,
      },
    });
  } catch (error) {
    yield put({ type: types.GET_LIST_REFERRAL_DEDUCTIONS_FAILURE });
  }
}

export function* watcherGetListReferralDeductions() {
  yield takeLatest(
    types.GET_LIST_REFERRAL_DEDUCTIONS_START,
    getListReferralDeductions,
  );
}

function* getReferralRatings({ payload }) {
  try {
    const { data, status } = yield call(
      api.affiliate.getReferralRatings,
      payload,
    );

    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    yield put({
      type: types.GET_REFERRAL_RATINGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({ type: types.GET_REFERRAL_RATINGS_FAILURE });
  }
}

export function* watcherGetReferralRatings() {
  yield takeLatest(types.GET_REFERRAL_RATINGS_START, getReferralRatings);
}
