export const walletSelector = state => state.wallet;
export const whitelistAddressesSelector = state =>
  state.wallet.withdrawalWhitelistAddresses;
export const paymentMethodsSelector = state => state.wallet.assetPayments;
export const paymentLinkSelector = state => state.wallet.paymentLink;
export const allAssetsSelector = state => state.assets.assets;
export const circlePublicKeySelector = state => state.wallet.circlePublicKey;
// export const recentDepositHistoryWalletSelector = state =>
//   state.wallets.recentDepositHistory;
// export const recentWithdrawHistoryWalletSelector = state =>
//   state.wallets.recentWithdrawHistory;
// export const transactionHistoryWalletSelector = state =>
//   state.wallets.transactionHistory;
// export const transferHistoryWalletSelector = state =>
//   state.wallets.transferHistory;
// export const airdropWalletSelector = state => state.wallets.airdrop;
export const spotWalletSelector = state => state.wallet.walletsList;
// export const marginWalletSelector = state => state.wallets.margin;
// export const loadingWalletSelector = state => state.wallets.loading;
//
// export const jTestBalanceSelector = state =>
//   state?.wallets?.spot?.jtesta?.balance;
// export const jTestViewDecimalSelector = state =>
//   state?.wallets?.spot?.jtesta?.asset?.view_decimal;
//
// export const airdropSelector = state =>
//   state.wallets?.airdrop?.balance?.dividends;
// export const marginSingleBorrowWalletSelector = state =>
//   state.trade.margin.singleBorrow;
//
// export const referralsWalletSelector = state => state.wallets.referrals; // fix was here
// export const referralAssetsWalletSelector = state =>
//   state.wallets.referrals.referrals; // fix was here
//
export const assetsWalletSelector = state => state.assets.assets;
//
// export const walletSelector = state => state.wallets;
