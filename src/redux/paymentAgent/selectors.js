export const paymentAgentSelector = state => state.paymentAgent.paymentAgent;
export const paymentAgentCommissionSelector = state =>
  state.paymentAgent.paymentAgent.paymentAgentCommission;
export const paymentAgentSingleSelector = state =>
  state.paymentAgent.paymentAgent.singlePaymentAgent;
export const paymentAgentWithdrawalListSelector = state =>
  state.paymentAgent.paymentAgentWithdrawal.withdrawalList;
export const paymentAgentTransferListSelector = state =>
  state.paymentAgent.paymentAgentTransfer.transferList;
export const paymentAgentsListSelector = state =>
  state.paymentAgent.paymentAgent.publicAgentsList;
export const paymentAgentsLoadingSelector = state =>
  state.paymentAgent.isLoading;
export const countriesSelector = state =>
  state.paymentAgent.paymentAgent.countries;
