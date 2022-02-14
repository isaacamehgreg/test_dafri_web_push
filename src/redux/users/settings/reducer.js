import types from '../../types';

const initialState = {
  data: null,
  google2fa: null,
  loginRecords: null,
  devices: null,
};

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get user data
    case types.GET_USER_DATA_START:
    case types.GET_USER_DATA_FAILURE:
      return initialState;

    case types.GET_USER_DATA_SUCCESS:
      return { ...state, ...payload };

    case types.UPDATE_USER_DATA_SUCCESS:
      return { ...state, data: payload };

    // Google 2fa
    case types.GENERATE_GOOGLE_SECRET_START:
    case types.GENERATE_GOOGLE_SECRET_FAILURE:
      return { ...state, google2fa: null };

    case types.GENERATE_GOOGLE_SECRET_SUCCESS:
      return { ...state, google2fa: payload };

    // Get login records
    case types.GET_LOGIN_RECORDS_START:
    case types.GET_LOGIN_RECORDS_FAILURE:
      return { ...state, loginRecords: null };

    case types.GET_LOGIN_RECORDS_SUCCESS:
      return { ...state, loginRecords: payload };

    // Get devices records && Delete device record
    case types.GET_DEVICES_LIST_START:
    case types.GET_DEVICES_LIST_FAILURE:
    case types.DELETE_DEVICES_LIST_START:
    case types.DELETE_DEVICES_LIST_FAILURE:
      return { ...state };

    case types.GET_DEVICES_LIST_SUCCESS:
      return { ...state, devices: payload };

    // When logged out
    case types.LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default settingsReducer;
