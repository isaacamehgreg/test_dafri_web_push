import types from '../types';

const initialState = {
  assetPairs: [],
  topPairs: [],
  loading: false,
};
const assetPairs = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ASSET_PAIRS_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ASSET_PAIRS_SUCCESS:
      return {
        ...state,
        loading: false,
        assetPairs: action.payload,
      };

    case types.UPDATE_ASSET_PAIRS:
      return {
        ...state,
        assetPairs: action.payload,
        favoritePairs: action.payload.filter(item => item.favorite),
        marginPairs: action.payload,
        spotPairs: action.payload,
      };

    case types.GET_ASSET_PAIRS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    //  Get top pairs
    case types.GET_TOP_PAIRS_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_TOP_PAIRS_SUCCESS:
      return {
        ...state,
        loading: false,
        topPairs: action.payload,
      };

    case types.GET_TOP_PAIRS_FAILURE:
      return {
        ...state,
        loading: false,
        topPairs: [],
      };

    case types.LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default assetPairs;
