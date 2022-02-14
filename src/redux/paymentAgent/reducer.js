import types from '../types';

const initialState = {
  publicAgentsList: null,
  privateAgentsList: null,
  paymentAgentCommission: {
    deposit: null,
    withdraw: null,
  },
  singlePaymentAgent: null,
  countries: null,
  isLoading: false,
};

export const paymentAgent = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PUBLIC_PAYMENT_AGENTS_LIST_START:
      return { ...state, isLoading: true };

    case types.GET_PUBLIC_PAYMENT_AGENTS_LIST_SUCCESS:
      return !state.publicAgentsList?.data
        ? { ...state, publicAgentsList: payload, isLoading: false }
        : {
            ...state,
            isLoading: false,
            publicAgentsList: {
              ...state.publicAgentsList,
              ...payload,
              data: [...state.publicAgentsList?.data, ...payload.data],
            },
          };

    case types.GET_PUBLIC_PAYMENT_AGENTS_LIST_FAILURE:
      return { ...state, isLoading: false };

    case types.CLEAR_ALL_PUBLIC_PAYMENT_AGENTS_LIST:
      return { ...state, publicAgentsList: null };

    case types.GET_PRIVATE_PAYMENT_AGENTS_LIST_START:
      return { ...state, isLoading: true };

    case types.GET_PRIVATE_PAYMENT_AGENTS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        privateAgentsList: payload,
      };

    case types.GET_PRIVATE_PAYMENT_AGENTS_LIST_FAILURE:
      return { ...state, isLoading: false };

    case types.CALCULATE_PAYMENT_AGENT_COMMISSION_START:
      return state;

    case types.CALCULATE_PAYMENT_AGENT_COMMISSION_SUCCESS:
      return {
        ...state,
        paymentAgentCommission: {
          ...state.paymentAgentCommission,
          [payload.type]: payload.data,
        },
      };
    case types.CALCULATE_PAYMENT_AGENT_COMMISSION_FAILURE:
      return state;
    case types.POST_PAYMENT_AGENT_FIAT_BANKS_WITHDRAW_SUCCESS:
      return {
        ...state,
        paymentAgentCommission: initialState?.paymentAgentCommission,
      };

    case types.GET_SINGLE_PAYMENT_AGENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SINGLE_PAYMENT_AGENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singlePaymentAgent: payload,
      };
    case types.GET_SINGLE_PAYMENT_AGENT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case types.GET_COUNTRIES_DATA_START:
    case types.GET_COUNTRIES_DATA_FAILURE:
      return {
        ...state,
        countries: null,
      };

    case types.GET_COUNTRIES_DATA_SUCCESS:
      return {
        ...state,
        countries: payload,
      };

    default:
      return state;
  }
};
