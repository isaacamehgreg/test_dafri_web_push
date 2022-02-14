import axios from 'axios';

export default {
  auth: {
    login: data => axios.post(`/api/login`, data),
    loginBySms: data => axios.post(`/api/sms_login`, data),
    logout: () => axios.post(`/api/logout`),
    resetPassword: data => axios.post(`/api/password_reset`, data),
    signup: data => axios.post(`/api/register`, data),
    changePassword: data => axios.put(`/api/user/password`, data),
    changeUserPassword: data =>
      axios.put(`/api/settings/change_password`, data),
    postResendLoginSmsCode: data => axios.post(`/api/re_send_sms`, data),
    reset2FA: data => axios.post(`/api/2fa/reset`, data),
    uploadSelfi: data => axios.post(`/api/2fa/reset/selfie`, data),
    confirmEmail: data => axios.put(`/api/email_confirmation`, data),
    verifyUserIP: data => axios.put(`/api/whitelist_ip`, data),
    recentCode: email => axios.post(`/api/whitelist_ip/resend`, email),
    refreshToken: () => axios.get(`/api/token/refresh`),
  },
  user: {
    getAssets: () => axios.get(`/api/assets`),
  },
  settings: {
    getUser: () => axios.get(`/api/user`),
    googleGenerateSecretKey: () =>
      axios.get(`/api/settings/2fa/generate_secret_key`),
    googleEnable2FA: code => axios.post(`/api/settings/2fa/enable`, code),
    googleDisable2FA: code => axios.post(`/api/settings/2fa/disable`, code),
    getSMS: data => axios.post(`/api/settings/code/generate_code`, data),
    getEmailCode: data =>
      axios.post(`/api/settings/wallets/send_email_code`, data),
    enable2FAPhone: data => axios.post(`/api/settings/sms/enable`, data),
    disable2FAPhone: data => axios.post(`/api/settings/sms/disable`, data),
    setAntiphishingPhrase: phrase =>
      axios
        .post(`/api/settings/set_anti_fishing_phrase`, phrase)
        .then(response => response)
        .catch(error => error.response),
    getLoginRecords: () => axios.get(`/api/user/security/login_history`),
    getDevicesRecords: () => axios.get(`/api/user/security/devices`),
    deleteDeviceRecord: data =>
      axios.delete(`/api/user/security/device`, { data }),
    getBanksRequizites: () => axios.get('/api/banks_settings'),
    getAssetPaymentMethods: () => axios.get('/api/asset_payment_methods'),
  },

  support: {
    postSupport: data => axios.post(`/api/create_ticket`, data),
    postContactUs: data => axios.post(`/api/contact_us`, data),
  },
  chart: {
    getHistoryChart: query => axios.get(`/api/history${query}`),
  },
  trading: {
    getTopPairs: () => axios.get('/api/top_pairs'),
    getAssetPairs: () => axios.get('/api/assets_pairs'),
    getAssetsPairsVolume: () => axios.get('/api/assets_pairs/volume'),
    getOrderBook: ({ activePair, data }) =>
      axios.get(`/api/order_book/${activePair}`, data),
    getSpotAssetPairs: () => axios.get('/api/assets_pairs/spot'), // for spot pairs list
    getMarginAssetPairs: () => axios.get('/api/assets_pairs/margin'), // for margin market list
    getFavoriteAssetPairs: () => axios.get('/api/assets_pairs/favorite'), // for fav market list
    updateFavoriteAssetPair: body =>
      axios.put('/api/assets_pairs/favorite', body),
    postCalculateMarketOrder: data =>
      axios.post(`/api/calculate_market_order`, data),
    postCalculateLimitOrder: data =>
      axios.post(`/api/calculate_limit_order`, data),
    postPublicCalculateMarketOrder: data =>
      axios.post(`/api/custom/calculate_market_order`, data),
    postPublicCalculateLimitOrder: data =>
      axios.post(`/api/custom/calculate_limit_order`, data),
    getRecentTrades: (activePair, data) =>
      axios.get(`/api/trades/${activePair}`, data),

    // ---- tables block / market page
    getOrders: data => axios.get('/api/my_orders/opened', data),
    SwapHistory: data => axios.get('/api/swap_history', data),
    cancelOrder: activePair => axios.post(`/api/orders/${activePair}/cancel`),
    cancelAllOrders: data => axios.post(`/api/order/cancel/all`, data),
    cancelOpenedLimitOrder: id =>
      axios.post(`/api/stop_limit_orders/${id}/cancel`),
    getTradesHistory: data => axios.get('/api/trades_history', data),
    getOrdersBook: ({ activePair, limit }) =>
      axios.get(`/api/order_book/${activePair}/${limit}`),
    getHistory: data => axios.get('/api/orders_history', data),
    getFunds: () => axios.get('/api/settings/wallet'),
    loadRecentTrades: ({ activePair, params }) =>
      axios.get(`/api/trades/${activePair}`, { params }),
    createOrder: ({ payload }) => axios.post('/api/orders', payload),
    createStopLimitOrder: ({ payload }) =>
      axios.post('/api/stop_limit_orders', payload),

    getUserTradeVolumeStatistics: () => axios.get('/api/volume_statistics'),
    getTradingVolumeLevels: () => axios.get('/api/trade_levels'),
    getCurrentCahsback: () => axios.get('/api/current_cashback'),
    getCashbacksByTrades: ({ params }) =>
      axios.get('/api/orders_transactions', { params }),
  },
  deposit: {
    getWalletsList: () => axios.get('/api/settings/wallets'),
    getFiatDepositHistory: ({ params }) =>
      axios.get(`/api/fiat/payment_history`, { params }),
    getCryptoDepositHistory: ({ params }) =>
      axios.get(`/api/crypto_deposit_history`, { params }),
    generateOzowRequest: data => axios.post(`/api/fiat/payment_ozow`, data),
    generateBankRequest: data =>
      axios.post('/api/settings/wallets/bank_deposit', data),
    sendBankRequizitesToEmail: data =>
      axios.post('/api/user/send_bank_requisites', data),
    generateCoinAdress: data =>
      axios.post(`/api/settings/wallets/${data.walletID}/generate_address`, {
        network: data.network,
      }),
    getCirclePublicKey: () => axios.get(`/api/fiat/circle/public_key`),
    createCircleCard: data => axios.post(`/api/fiat/circle/create_card`, data),
    makeCirclePayment: data =>
      axios.post(`/api/fiat/circle/make_payment`, data),
    createPaymentAgentFiatDeposit: data =>
      axios.post(`/api/payment_agent/deposit`, data),
    generateDafribankRequest: data =>
      axios.post(`/api/fiat/dafri/create_payment`, data),
  },
  withdraw: {
    postCryptoWithdraw: data =>
      axios.post('/api/settings/wallets/withdrawal_request', data),
    getFiatWithdrawHistory: ({ params }) =>
      axios.get(`/api/settings/wallets/withdrawals`, { params }),
    getCryptoWithdrawHistory: ({ params }) =>
      axios.get(`/api/settings/wallets/withdrawals`, { params }),
    getWithdrawAmountInUsd: ({ params }) =>
      axios.get(`/api/settings/getAmountInUsd`, { params }),
    getWithdrawWhitelistAddresses: () => axios.get(`/api/user/white_addresses`),
    updateUserWhitelistAddresses: data =>
      axios.put('/api/user/white_addresses', data),
    checkValidAddress: data => axios.post('/api/user/check_address', data),
    toggleWithdrawWhitelistAddresses: data =>
      axios.put('/api/user/security/white_addresses_enable', data),
    postFiatBanksWithdraw: data =>
      axios.post('/api/settings/wallets/bank_withdraw/bank_account', data),
    postPaymentAgentFiatBanksWithdraw: data =>
      axios.post('/api/payment_agent/withdrawal_request', data),
  },
  history: {
    getDepositHistory: ({ params }) =>
      axios.get('/api/settings/wallets/deposits', { params }),
    getWithdrawalHistory: ({ params }) =>
      axios.get('/api/settings/wallets/withdrawals', { params }),
  },
  investment: {
    postInvestmentForm: data => axios.post('/api/investment', data),
  },
  verification: {
    getToken: () => axios.get('/api/sumsub/get-access-token'),
    getSumSubStatus: () => axios.get('/api/sumsub/get-status'),
    getDocsStatus: () => axios.get('/api/sumsub/get-doc-status'),
  },
  affiliate: {
    getReferralInfo: () => axios.get('/api/referral/info'),
    getListReferralDeductions: ({ params }) =>
      axios.get('/api/referral/list_referral_deductions', { params }),
    getReferralRatings: ({ params }) =>
      axios.get('/api/referral/rating', { params }),
  },
  lockedToken: {
    getDBAAnalysis: ({ params }) => axios.get('/api/dba/analysis', { params }),
  },
  buyDBA: {
    getBuyDBAInformation: () => axios.get('/api/dba/info'),
    checkDBA: data => axios.post('/api/dba/buy', data),
    buyDBA: data => axios.post('/api/dba/buy', data),
  },
  bankTransfer: {
    exchangeRate: assets => axios.post(`/api/exchange_rate`, assets),
    makeExchange: data => axios.post(`/api/exchange`, data),
    getExchangeHistory: ({ params }) => axios.get(`api/exchanges`, { params }),
    getSecondAssets: data => axios.post('api/exchange_assets', data),
  },
  paymentAgent: {
    getPublicPaymentAgents: ({ params }) =>
      axios.get(`/api/payment_agent/payment_agents`, { params }),
    getPrivatePaymentAgents: ({ params }) =>
      axios.get(`/api/payment_agent/user/payment_agents`, { params }),
    calculatePaymentAgentCommission: data =>
      axios.post(`/api/payment_agent/calculate_commission`, data),
    registerPaymentAgent: data =>
      axios.post(`/api/payment_agent/create_request`, data),
    getSinglePaymentAgent: ({ id }) =>
      axios.get(`/api/payment_agent/payment_agents/${id}`),
    getPaymentAgentWithdrawalList: ({ params }) =>
      axios.get(`/api/payment_agent/transactions?type=withdrawal`, { params }),
    postPaymentAgentUpdateWithdrawalStatus: data =>
      axios.post(`/api/payment_agent/withdrawal`, data),
    getPaymentAgentTransferlList: ({ params }) =>
      axios.get(`/api/payment_agent/transactions`, { params }),
    editPaymentAgent: data =>
      axios.post(`/api/payment_agent/personal_data`, data),
    getCountriesData: () => axios.get(`/api/countries`),
  },
  home: {
    getMarkets: () => axios.get(`/api/markets`),
  },
};
