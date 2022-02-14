import types from '../../types';

const initialState = {
  transferList: null,
};

export const paymentAgentTransfer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case types.GET_PAYMENT_AGENT_TRANSFER_LIST_START:
      return { ...state };
    case types.GET_PAYMENT_AGENT_TRANSFER_LIST_SUCCESS:
      return { ...state, transferList: payload };
    case types.GET_PAYMENT_AGENT_TRANSFER_LIST_FAILURE:
      return { ...state };

    case types.CLEAR_PAYMENT_AGENT_TRANSFER_LIST:
      return { ...state, transferList: null };

    default:
      return state;
  }
};
