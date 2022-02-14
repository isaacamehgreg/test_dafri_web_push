import types from '../../types';

const initState = {
  loading: false,
  data: [],
};

const markets = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_MARKETS_DATA_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_MARKETS_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case types.GET_MARKETS_DATA_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
      };

    case types.UPDATE_MARKETS:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};

export default markets;
