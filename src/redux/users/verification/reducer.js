import types from '../../types';

const initialState = {
  loading: false,
  token: null,
  errors: null,
};

const kyc = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_SUMSUB_TOKEN_START:
      return { ...state, loading: true };

    case types.GET_SUMSUB_TOKEN_SUCCESS:
      return { ...state, token: payload, loading: false };

    case types.GET_SUMSUB_TOKEN_FAILURE:
      return { ...state, token: null, errors: payload, loading: false };

    default:
      return state;
  }
};

export default kyc;
