/* eslint-disable import/no-cycle */
import { fork } from 'redux-saga/effects';
import { rootSagaAuth } from './auth/actions';
import { watcherSetLanguage } from './lng/actions';
import { watcherResetPassword } from './auth/resetPassword/actions';
import * as reset2FA from './auth/reset2FA/actions';
import * as spotTrade from './trade/spot/actions';
import * as createOrder from './trade/actions';
import { watcherPostCalculateLimitOrder } from './trade/calculate/limitOrder/actions';
import { watchOnSocket } from './sockets/action';
import { watcherSignup } from './auth/signup/actions';
import {
  watcherChangePassword,
  watcherChangeUserPassword,
} from './auth/changePassword/actions';
import { watcherSetCurrentPair } from './currentPair/actions';
import { watcherSetModal } from './modal/actions';
import {
  watcherDisable2FA,
  watcherEnable2FA,
  watcherGenerateGoogleSecretCode,
} from './users/settings/Google2FA/actions';
import {
  watcherAntiphishingPhrase,
  watcherChangeAntiphishingPhrase,
} from './users/settings/AntiPhishing/actions';
import { watcherGetUser } from './users/settings/actions';
import {
  watcherDisable2FAPhone,
  watcherEnable2FAPhone,
  watcherGetEmailCode,
  watcherGetSMSCode,
} from './users/settings/SMSActions/actions';
import { watcherGetLoginRecords } from './users/settings/LoginRecords/actions';
import {
  watcherDeleteDeviceRecords,
  watcherGetDevicesRecords,
} from './users/settings/DevicesRecords/actions';
import {
  watcherSendContactUsForm,
  watcherSendSupportForm,
} from './statics/support/actions';
import { watcherSetInterval } from './interval/actions';
import * as assetPairs from './pairs/actions';

import {
  watcherGetExchangeRate,
  watcherMakeExchange,
  watcherGetExchangeHistory,
  watcherGetSecondAssets,
} from './exchange/actions';

import {
  watcherGetCryptoDepositHistory,
  watcherGetFiatDepositHistory,
} from './wallets/depositHistory/actions';

import { watcherReset2FA } from './auth/reset2FA/actions';
import { watcherGetWalletsList, watcherGetAssets } from './wallets/actions';
import { watcherGenerateCoinAdress } from './wallets/depositCrypto/actions';
import {
  watcherGetWithdrawAmountInUsd,
  watcherPostCryptoWithdraw,
} from './wallets/witdrawCrypto/actions';
import {
  watcherGetFiatWithdrawHistory,
  watcherGetCryptoWithdrawHistory,
} from './wallets/withdrawHistory/actions';
import { watcherGenerateOzowRequest } from './wallets/fiatRequests/ozow/actions';
import { watcherGetDepositHistory } from './trade/history/depositHistory/actions';
import {
  watcherGetWithdrawWhitelistAddresses,
  watcherUpdateUserWhitelistAddresses,
  watcherCheckValidAddress,
  watcherToggleWithdrawWhitelistAddresses,
} from './wallets/withdrawWhitelistAddresses/actions';
import { watcherSendInvestmentForm } from './statics/InvestmentForm/actions';
import { watcherGetWitdrawalHistory } from './trade/history/withdrawalHistory/actions';
import { watcherClearAllHistory } from './trade/history/actions';
import { watcherGetSumSubToken } from './users/verification/actions';
import {
  watcherGetListReferralDeductions,
  watcherGetReferralInfo,
  watcherGetReferralRatings,
} from './users/affiliate/actions';
import {
  watcherPostFiatBanksWithdraw,
  watcherPostPaymentAgentFiatBanksWithdraw,
} from './wallets/witdrawFiat/actions';
import { watcherGetDBAAnalysis } from './wallets/dbaAnalysis/actions';
import { watcherPostCalculateMarketOrder } from './trade/calculate/marketOrder/actions';
import {
  watcherBuyDBA,
  watcherCheckDBA,
  watcherGetBuyDBAInformation,
} from './users/buyDBA/actions';
import { watcherGetAssetPaymentMethods } from './wallets/fiatRequests/banksSettings/actions';
import {
  watcherGenerateBankRequest,
  watcherSendBankRequizitesToEmail,
} from './wallets/fiatRequests/bank/actions';
import {
  watcherCreateCircleCard,
  watcherGetCirclePublicKey,
  watcherCreateCirclePayment,
} from './wallets/fiatRequests/circle/actions';
import {
  watcherGetPublicPaymentAgentsList,
  watcherGetPrivatePaymentAgentsList,
  watcherCalculatePaymentAgentCommission,
  watcherRegisterPaymentAgent,
  watcherGetSinglePaymentAgent,
  watcherGetCountries,
} from './paymentAgent/actions';
import { watcherCreatePaymentAgentFiatDeposit } from './wallets/fiatRequests/paymentAgent/actions';
import {
  watcherGetPublicPaymentAgentWithdrawalList,
  watcherPostPaymentAgentUpdateWithdrawalStatus,
} from './paymentAgent/withdrawal/actions';
import { watcherGetPaymentAgentTransferlList } from './paymentAgent/transfer/actions';

import { watcherEditPaymentAgent } from './paymentAgent/editPaymentAgent/actions';
import { watcherGetMarkets } from './statics/newHomePage/actions';
import { watcherGenerateDafribankRequest } from './wallets/fiatRequests/dafriBank/actions';

export function* rootSaga() {
  // -----// sockets_start //-----//
  yield fork(watchOnSocket); // try spawn

  // -----// Other //-----//
  yield fork(rootSagaAuth);
  yield fork(watcherResetPassword);
  yield fork(watcherChangePassword);
  yield fork(watcherChangeUserPassword);
  yield fork(watcherSignup);
  yield fork(watcherSetLanguage);
  yield fork(watcherSetModal);

  yield fork(watcherReset2FA);

  // settings -> get user fata
  yield fork(watcherGetUser);

  // settings -> google2fa
  yield fork(watcherGenerateGoogleSecretCode);
  yield fork(watcherEnable2FA);
  yield fork(watcherDisable2FA);

  // settings -> sms
  yield fork(watcherGetSMSCode);
  yield fork(watcherGetEmailCode);
  yield fork(watcherEnable2FAPhone);
  yield fork(watcherDisable2FAPhone);

  // settings -> anti phishing
  yield fork(watcherAntiphishingPhrase);
  yield fork(watcherChangeAntiphishingPhrase);

  // settings -> login records
  yield fork(watcherGetLoginRecords);

  // settings -> devices records
  yield fork(watcherGetDevicesRecords);
  yield fork(watcherDeleteDeviceRecords);

  // Support & contact us forms
  yield fork(watcherSendSupportForm);
  yield fork(watcherSendContactUsForm);

  // currentPair
  yield fork(watcherSetCurrentPair);

  yield fork(watcherSetInterval);

  // -----// trade //-----//
  // yield fork(createOrder.watcherCreateOrder);
  // yield fork(createOrder.watcherCreateStopLimitOrder);

  // -----// spot //-----//
  yield fork(spotTrade.watcherSpotGetOrders);
  yield fork(spotTrade.SwapOrders);
  yield fork(spotTrade.watcherSpotCancelOrder);
  yield fork(spotTrade.watcherSpotCancelAllOrders);
  yield fork(spotTrade.watcherSpotGetHistory);
  yield fork(spotTrade.watcherSpotGetTradeHistory);
  yield fork(spotTrade.watcherSpotGetOrderBook);
  yield fork(spotTrade.watcherSpotGetRecentTrades);

  yield fork(assetPairs.watcherGetAssetPairs);
  yield fork(assetPairs.watcherGetTopPairs);
  // Deposit
  yield fork(watcherGetWalletsList);
  yield fork(watcherGetAssets);
  yield fork(watcherGetFiatDepositHistory);
  yield fork(watcherGetCryptoDepositHistory);
  yield fork(watcherGenerateCoinAdress);
  yield fork(watcherGetAssetPaymentMethods);
  yield fork(watcherGenerateOzowRequest);
  yield fork(watcherGenerateDafribankRequest);
  yield fork(watcherSendBankRequizitesToEmail);
  yield fork(watcherGenerateBankRequest);
  yield fork(watcherGetCirclePublicKey);
  yield fork(watcherCreateCircleCard);
  yield fork(watcherCreateCirclePayment);
  yield fork(watcherCreatePaymentAgentFiatDeposit);

  // -----// trade //-----//
  yield fork(createOrder.watcherCreateOrder);
  yield fork(createOrder.watcherCreateStopLimitOrder);

  // ---- // watcherPostCalculate // ----- //
  yield fork(watcherPostCalculateLimitOrder);
  yield fork(watcherPostCalculateMarketOrder);
  // Withdraw
  yield fork(watcherPostCryptoWithdraw);
  yield fork(watcherGetCryptoWithdrawHistory);
  yield fork(watcherGetFiatWithdrawHistory);
  yield fork(watcherGetWithdrawAmountInUsd);
  yield fork(watcherGetWithdrawWhitelistAddresses);
  yield fork(watcherUpdateUserWhitelistAddresses);
  yield fork(watcherCheckValidAddress);
  yield fork(watcherToggleWithdrawWhitelistAddresses);
  yield fork(watcherPostFiatBanksWithdraw);
  yield fork(watcherPostPaymentAgentFiatBanksWithdraw);

  // History
  yield fork(watcherGetDepositHistory);
  yield fork(watcherGetWitdrawalHistory);
  yield fork(watcherClearAllHistory);

  // Investment form
  yield fork(watcherSendInvestmentForm);

  // KYC & SUMSUB
  yield fork(watcherGetSumSubToken);

  // Affiliate
  yield fork(watcherGetReferralInfo);
  yield fork(watcherGetListReferralDeductions);
  yield fork(watcherGetReferralRatings);

  // LockedToken
  yield fork(watcherGetDBAAnalysis);

  // BuyDBA
  yield fork(watcherGetBuyDBAInformation);

  // instance exchange // ----- //
  yield fork(watcherGetExchangeRate);
  yield fork(watcherMakeExchange);
  yield fork(watcherGetExchangeHistory);
  yield fork(watcherCheckDBA);
  yield fork(watcherBuyDBA);
  yield fork(watcherGetSecondAssets);

  // payment agent // ----- //
  yield fork(watcherGetPublicPaymentAgentsList);
  yield fork(watcherGetPrivatePaymentAgentsList);
  yield fork(watcherCalculatePaymentAgentCommission);
  yield fork(watcherRegisterPaymentAgent);
  yield fork(watcherGetSinglePaymentAgent);
  yield fork(watcherGetPublicPaymentAgentWithdrawalList);
  yield fork(watcherPostPaymentAgentUpdateWithdrawalStatus);
  yield fork(watcherGetPaymentAgentTransferlList);
  yield fork(watcherEditPaymentAgent);
  yield fork(watcherGetCountries);

  // Home page
  yield fork(watcherGetMarkets);
}
