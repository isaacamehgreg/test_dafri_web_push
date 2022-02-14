import { put, takeLatest, call } from 'redux-saga/effects';
import types from '../../../types';
import api from '../../../../services/api';
import notification from '../../../../services/notification';

const messages = {
  invalid: 'the_phrase_format_is_invalid',
};

export function* setAntiphishingPhrase({ payload }) {
  const { data, status } = yield call(api.settings.setAntiphishingPhrase, {
    phrase: payload,
  });

  if (status < 200 || status >= 300) {
    let message = '';

    if (data.errors.phrase[0] === messages.invalid) {
      message =
        'The phrase format is not valid. Phrase must contain at least 8 characters with numbers and capital letters';
    } else {
      message = 'Something went wrong, try later';
    }

    notification({
      type: 'error',
      message,
    });

    yield put({ type: types.SET_ANTIPHISHING_PHRASE_FAILURE });
  } else {
    notification({
      type: 'success',
      message: 'You successfully set your antiphishing phrase',
    });

    yield put({
      type: types.SET_ANTIPHISHING_PHRASE_SUCCESS,
      payload,
    });

    yield put({ type: types.GET_USER_DATA_START });
  }
}

export function* watcherAntiphishingPhrase() {
  yield takeLatest(types.SET_ANTIPHISHING_PHRASE_START, setAntiphishingPhrase);
}

export function* changeAntiphishingPhrase({ payload }) {
  const { data, status } = yield call(api.settings.setAntiphishingPhrase, {
    phrase: payload,
  });

  if (status < 200 || status >= 300) {
    let message = '';

    if (data.errors.phrase[0] === messages.invalid) {
      message =
        'The phrase format is not valid. Phrase must contain at least 8 characters with numbers and capital letters';
    } else {
      message = 'Something went wrong, try later';
    }

    notification({
      type: 'error',
      message,
    });
    yield put({ type: types.CHANGE_ANTIPHISHING_PHRASE_FAILURE });
  } else {
    notification({
      type: 'success',
      timeOut: 5000,
      message: 'You successfully change your antiphishing phrase',
    });

    yield put({
      type: types.CHANGE_ANTIPHISHING_PHRASE_SUCCESS,
      payload: data,
    });
    yield put({ type: types.GET_USER_DATA_START });
  }
}

export function* watcherChangeAntiphishingPhrase() {
  yield takeLatest(
    types.CHANGE_ANTIPHISHING_PHRASE_START,
    changeAntiphishingPhrase,
  );
}
