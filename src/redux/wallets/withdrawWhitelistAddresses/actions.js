import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../types';
import api from '../../../services/api';
import notification from '../../../services/notification';
import { callErrorFunc } from '../../../services/helpers';

export function* getWithdrawWhitelistAddresses({ payload }) {
  try {
    const { data, status } = yield call(
      api.withdraw.getWithdrawWhitelistAddresses,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.GET_WITHDRAW_WHITELIST_ADDRESSES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: types.GET_WITHDRAW_WHITELIST_ADDRESSES_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherGetWithdrawWhitelistAddresses() {
  yield takeLatest(
    types.GET_WITHDRAW_WHITELIST_ADDRESSES_START,
    getWithdrawWhitelistAddresses,
  );
}

export function* toggleWithdrawWhitelistAddresses({ payload }) {
  try {
    const { data, status } = yield call(
      api.withdraw.toggleWithdrawWhitelistAddresses,
      payload,
    );

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({
      type: types.TOGGLE_WITHDRAW_WHITELIST_ADDRESSES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: types.TOGGLE_WITHDRAW_WHITELIST_ADDRESSES_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherToggleWithdrawWhitelistAddresses() {
  yield takeLatest(
    types.TOGGLE_WITHDRAW_WHITELIST_ADDRESSES_START,
    toggleWithdrawWhitelistAddresses,
  );
}

export function* updateUserWhitelistAddresses({ payload }) {
  try {
    const { data, status } = yield call(
      api.withdraw.updateUserWhitelistAddresses,
      payload,
    );
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({
      type: types.UPDATE_WITHDRAW_WHITELIST_ADDRESSES_SUCCESS,
      payload: data,
    });

    notification({
      type: 'success',
      title: 'Security',
      message: 'Success. Your addresses has been updated.',
    });
  } catch (error) {
    console.dir(error);
    yield put({ type: types.UPDATE_WITHDRAW_WHITELIST_ADDRESSES_FAILURE });
    if (error?.response?.status === 401) return;
  }
}

export function* watcherUpdateUserWhitelistAddresses() {
  yield takeLatest(
    types.UPDATE_WITHDRAW_WHITELIST_ADDRESSES_START,
    updateUserWhitelistAddresses,
  );
}

export function* checkValidAddress({
  payload,
  setIsValid = () => {},
  setData = () => {},
  result = [],
  fieldId = '',
}) {
  try {
    const { data, status } = yield call(
      api.withdraw.checkValidAddress,
      payload,
    );
    if (status < 200 || status >= 300) throw new Error('Something went wrong');
    yield put({
      type: types.CHECK_USER_VALID_ADDRESS_SUCCESS,
    });

    if (data?.is_valid) {
      notification({
        type: 'success',
        title: 'Security',
        message: 'Success. Your address is valid.',
      });
      setIsValid(true);
      setData(
        result.map(el =>
          el.asset_code === payload.asset_code
            ? {
                ...el,
                error: false,
                addresses: el.addresses.map(item =>
                  item?.id === fieldId
                    ? { ...item, address: payload.address, isValid: true }
                    : item,
                ),
              }
            : el,
        ),
      );
    } else {
      notification({
        type: 'error',
        title: 'Security',
        message: 'Error. Your address is invalid!',
      });
      setIsValid(false);

      setData(
        result.map(el =>
          el.asset_code === payload.asset_code
            ? {
                ...el,
                error: true,
                addresses: el.addresses.map(item =>
                  item?.id === fieldId
                    ? { ...item, address: payload.address, isValid: false }
                    : item,
                ),
              }
            : el,
        ),
      );
    }
  } catch (error) {
    yield put({ type: types.CHECK_USER_VALID_ADDRESS_FAILURE });
    callErrorFunc(error?.response?.data?.errors);
    setIsValid(false);
    if (error?.response?.status === 401) return;
  }
}

export function* watcherCheckValidAddress() {
  yield takeLatest(types.CHECK_USER_VALID_ADDRESS_START, checkValidAddress);
}
