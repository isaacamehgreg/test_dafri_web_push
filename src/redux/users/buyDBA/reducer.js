import types from '../../types';

const initialState = {
  loading: false,
  information: null,
  step1FormData: null,
  goToNextStepForm: null,
  buyDBAFormStatus: null,
  errors: null,
};

const buyDBA = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DBA_INFORMATION_START:
      return { ...state, loading: true };

    case types.GET_DBA_INFORMATION_SUCCESS:
      return { ...state, information: payload, loading: false };

    case types.GET_DBA_INFORMATION_FAILURE:
      return { ...state, info: null, errors: payload, loading: false };

    case types.CHECK_DBA_START:
      return { ...state, step1FormData: payload, loading: true };

    case types.CHECK_DBA_SUCCESS:
      return { ...state, goToNextStepForm: payload, loading: false };

    case types.CHECK_DBA_FAILURE:
      return {
        ...state,
        goToNextStepForm: null,
        step1FormData: null,
        loading: false,
      };

    case types.CHECK_DBA_CLEAR_STEP:
      return {
        ...state,
        goToNextStepForm: null,
      };

    case types.BUY_DBA_START:
      return {
        ...state,
        buyDBAFormStatus: null,
      };

    case types.BUY_DBA_SUCCESS:
      return {
        ...state,
        buyDBAFormStatus: payload,
      };

    case types.BUY_DBA_CLEAR:
      return {
        ...state,
        buyDBAFormStatus: null,
      };

    default:
      return state;
  }
};

export default buyDBA;
