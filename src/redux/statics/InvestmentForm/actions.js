import { takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import notification from '../../../services/notification';
import { callErrorFunc } from '../../../services/helpers';

export function* sendInvestmentForm({ payload }) {
  try {
    const { data, status } = yield call(
      api.investment.postInvestmentForm,
      payload,
    );

    if (status < 200 || status >= 300) throw new Error('Something went wrong');

    notification({
      type: 'success',
      message: 'Success. Your data has been successfully send.',
    });
  } catch (error) {
    if (error?.response?.status === 401) return;

    callErrorFunc(error?.response?.data?.errors);
  }
}

export function* watcherSendInvestmentForm() {
  yield takeLatest(types.INVESTMENT_FORM_SEND_START, sendInvestmentForm);
}
