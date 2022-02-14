import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import notification from '../../../../services/notification';
import { callErrorFunc } from '../../../../services/helpers';

export function* getDevicesRecords() {
  try {
    const { data, status } = yield call(api.settings.getDevicesRecords);

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    yield put({ type: types.GET_DEVICES_LIST_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.GET_DEVICES_LIST_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherGetDevicesRecords() {
  yield takeLatest(types.GET_DEVICES_LIST_START, getDevicesRecords);
}

export function* deleteDeviceRecord({ payload }) {
  try {
    const { data, status } = yield call(api.settings.deleteDeviceRecord, {
      device_id: payload,
    });

    if (status < 200 || status >= 300) {
      throw new Error('Something went wrong');
    }

    notification({
      type: 'success',
      message: 'Device successfully deleted',
    });

    yield put({
      type: types.DELETE_DEVICES_LIST_SUCCESS,
      payload: data,
    });

    yield put({ type: types.GET_DEVICES_LIST_START });
  } catch (e) {
    yield put({ type: types.DELETE_DEVICES_LIST_FAILURE });
    callErrorFunc(e?.response?.data?.errors);
  }
}

export function* watcherDeleteDeviceRecords() {
  yield takeLatest(types.DELETE_DEVICES_LIST_START, deleteDeviceRecord);
}
