import types from '../types';

const initialState = {
  rate: '',
  rateExchange: null,
  exchangesHistory: null,
  secondAssets: null,
  loading: false,
};

const instanceExchange = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_EXCHANGE_HISTORY_START:
      return { ...state, loading: true };

    case types.EXCHANGE_RATE_SUCCESS:
      return {
        ...state,
        loading: false,
        rate: payload.rate,
        rateExchange: payload,
      };

    case types.GET_SECOND_ASSETS_SUCCESS:
      return {
        ...state,
        secondAssets: payload,
      };

    case types.GET_EXCHANGE_HISTORY_SUCCESS:
      return { ...state, loading: false, exchangesHistory: payload };

    case types.EXCHANGE_RATE_FAILURE:
    case types.GET_EXCHANGE_HISTORY_FAILURE:
      return { ...state, loading: false };

    case types.CLEAR_EXCHANGE_HISTORY:
      return { ...state, exchangesHistory: null };

    case types.LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default instanceExchange;
