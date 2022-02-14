/* eslint-disable import/no-cycle */
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import types from '../types';
// import { encryptor } from '../encryptor';

const initialState = {
  clearChart: false,
  loader: false,
  socket_token: false,
  isMobile: false,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_START:
      return { ...state, loader: true };
    case types.LOGIN_SUCCESS:
      return { ...payload, loader: false };
    case types.LOGIN_FAILURE:
      return { ...state, loader: false };

    // user information
    case types.GET_USER_DATA_SUCCESS:
      return { ...state, ...payload };

    case types.GET_REFRESH_TOKEN_SUCCESS:
      return { ...state, ...payload };

    // update token
    case types.UPDATE_USER_TOKEN_SUCCESS:
      return { ...state, token: payload.token, isMobile: payload.isMobile };

    // update user personal date
    case types.UPDATE_USER_DATA_SUCCESS:
      return { ...state, data: payload };

    case types.LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

const authConfig = {
  key: 'cryomex_auth',
  storage,
  white: ['socket_token', 'token', 'token_expired_at'],
  // transforms: [encryptor],
};

export default persistReducer(authConfig, user);
// export default user;
