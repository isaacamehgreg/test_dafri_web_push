import types from '../../types';

const initialState = {
  withdrawalList: null,
};

export const paymentAgentWithdrawal = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case types.GET_PAYMENT_AGENT_WITHDRAWAL_LIST_START:
      return { ...state };
    case types.GET_PAYMENT_AGENT_WITHDRAWAL_LIST_SUCCESS:
      return !state.withdrawalList?.data
        ? { ...state, withdrawalList: payload }
        : {
            ...state,
            withdrawalList: {
              ...state.withdrawalList,
              ...payload,
              data: [...state.withdrawalList.data, ...payload.data],
            },
          };
    case types.GET_PAYMENT_AGENT_WITHDRAWAL_LIST_FAILURE:
      return { ...state };
    case types.CLEAR_PAYMENT_AGENT_WITHDRAWAL_LIST:
      return { ...state, withdrawalList: null };

    case types.UPDATE_PAYMENT_AGENT_WITHDRAWAL_STATUS_SUCCESS:
      return {
        ...state,
        withdrawalList: {
          ...state.withdrawalList,
          data: state.withdrawalList.data.map(el =>
            el.id === payload.id
              ? { ...el, operation_status: payload.operation_status }
              : el,
          ),
        },
      };

    default:
      return state;
  }
};
