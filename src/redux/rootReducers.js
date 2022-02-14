/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import language from './lng/reducer';
import user from './auth/reducer';
import assetPairs from './pairs/reducers';
import decimals from './decimals/reducers';
import currentPair from './currentPair/reducer';
import interval from './interval/reducer';
import socket from './sockets/reducer';
import modal from './modal/reducer';
import settingsReducer from './users/settings/reducer';
import trade from './trade/reducers';
import { wallet, assets } from './wallets/reducer';
import temporary from './temporary/reducers';
import instanceExchange from './exchange/reducer';
import history from './trade/history/reducer';
import kyc from './users/verification/reducer';
import affiliate from './users/affiliate/reducer';
import buyDBA from './users/buyDBA/reducer';
import { paymentAgent } from './paymentAgent/reducer';
import { paymentAgentWithdrawal } from './paymentAgent/withdrawal/reducer';
import { paymentAgentTransfer } from './paymentAgent/transfer/reducer';
import markets from './statics/newHomePage/reducers';

const rootReducers = combineReducers({
  assets,
  decimals,
  temporary,
  interval,
  socket,
  user,
  assetPairs,
  trade,
  currentPair,
  language,
  modal,
  settings: settingsReducer,
  wallet,
  history,
  instanceExchange,
  kyc,
  affiliate,
  buyDBA,
  markets,
  paymentAgent: combineReducers({
    paymentAgent,
    paymentAgentWithdrawal,
    paymentAgentTransfer,
  }),
});

export default rootReducers;
