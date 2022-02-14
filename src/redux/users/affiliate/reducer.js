import types from '../../types';

const initialState = {
  loading: false,
  info: null,
  referralDeductionList: {
    buy: {},
    sell: {},
    withdraw: {},
  },
  ratings: null,
  errors: null,
};

const affiliate = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_REFERRAL_INFO_START:
      return { ...state, loading: true };

    case types.GET_REFERRAL_INFO_SUCCESS:
      return { ...state, info: payload, loading: false };

    case types.GET_REFERRAL_INFO_FAILURE:
      return { ...state, info: null, errors: payload, loading: false };

    case types.GET_LIST_REFERRAL_DEDUCTIONS_START:
      return { ...state, loading: true };

    case types.GET_LIST_REFERRAL_DEDUCTIONS_SUCCESS:
      return {
        ...state,
        referralDeductionList: {
          ...state.referralDeductionList,
          [payload.type]: payload.data,
        },
        loading: false,
      };

    case types.GET_LIST_REFERRAL_DEDUCTIONS_FAILURE:
      return {
        ...state,
        referralDeductionList: null,
        errors: payload,
        loading: false,
      };

    case types.GET_REFERRAL_RATINGS_START:
      return { ...state, loading: true };

    case types.GET_REFERRAL_RATINGS_SUCCESS:
      return {
        ...state,
        ratings: payload,
        loading: false,
      };

    case types.GET_REFERRAL_RATINGS_FAILURE:
      return {
        ...state,
        ratings: null,
        errors: payload,
        loading: false,
      };

    case types.CLEAR_LIST_REFERRAL_DEDUCTIONS:
    case types.CLEAR_REFERRAL_RATINGS:
      return initialState;

    default:
      return state;
  }
};

export default affiliate;
