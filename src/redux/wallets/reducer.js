import types from '../types';

const initialState = {
  isLoading: false,
  walletsList: [],
  availableInBTC: '0.00',
  frozenInBTC: '0.00',
  totalUSD: '0.00',
  generatedCoinData: null,
  fiatHistory: {
    data: [],
    errors: '',
  },
  cryptoHistory: {
    data: [],
    errors: '',
  },
  fiatWithdrawHistory: {
    data: [],
    errors: '',
  },
  cryptoWithdrawHistory: {
    data: [],
    errors: '',
  },
  withdrawAmountInUsd: null,
  withdrawalWhitelistAddresses: {
    data: [],
    errors: '',
  },
  assetPayments: null,
  dbaAnalysis: null,
  paymentLink: null,
  circlePublicKey: null,
};

export const wallet = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_WALLETS_LIST_START:
      return { ...state, isLoading: true };

    case types.GET_WALLETS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        walletsList: Object.values(payload.spot).map(item => item),
        totalUSD: payload.total_in_usd,
        availableInBTC: payload.available_in_btc,
        frozenInBTC: payload.frozen_in_btc,
      };

    case types.GET_WALLETS_LIST_FAILURE:
      return { ...state, isLoading: false };

    case types.UPDATE_WALLETS_LIST:
      return {
        ...state,
        loading: false,
        walletsList: Object.values(payload.spot).map(item => item),
        totalUSD: payload.total_in_usd,
        availableInBTC: payload.available_in_btc,
        frozenInBTC: payload.frozen_in_btc,
      };

    // Get fiat deposit history
    case types.GET_FIAT_DEPOSIT_HISTORY_START:
      return { ...state };

    case types.GET_FIAT_DEPOSIT_HISTORY_SUCCESS:
      return {
        ...state,
        fiatHistory: {
          data: payload,
          errors: '',
        },
      };

    case types.GET_FIAT_DEPOSIT_HISTORY_FAILURE:
      return {
        ...state,
        fiatHistory: {
          data: [],
          errors: payload,
        },
      };

    // Get crypto deposit history
    case types.GET_CRYPTO_DEPOSIT_HISTORY_START:
      return { ...state };

    case types.GET_CRYPTO_DEPOSIT_HISTORY_SUCCESS:
      return {
        ...state,
        cryptoHistory: {
          data: payload,
          errors: '',
        },
      };

    case types.GET_CRYPTO_DEPOSIT_HISTORY_FAILURE:
      return {
        ...state,
        cryptoHistory: {
          data: [],
          errors: payload,
        },
      };

    // Generate coin adress
    case types.GENERATE_COIN_ADRESS_START:
    case types.GENERATE_COIN_ADRESS_FAILURE:
      return { ...state, generatedCoinData: null };

    case types.GENERATE_COIN_ADRESS_SUCCESS:
      return { ...state, generatedCoinData: payload };

    // Get fiat withdraw history
    case types.GET_FIAT_WITHDRAW_HISTORY_START:
      return { ...state };

    case types.GET_FIAT_WITHDRAW_HISTORY_SUCCESS:
      return {
        ...state,
        fiatWithdrawHistory: {
          data: payload,
          errors: '',
        },
      };

    case types.GET_FIAT_WITHDRAW_HISTORY_FAILURE:
      return {
        ...state,
        fiatWithdrawHistory: {
          data: [],
          errors: payload,
        },
      };

    // Get crypto withdraw history
    case types.GET_CRYPTO_WITHDRAW_HISTORY_START:
      return { ...state };

    case types.GET_CRYPTO_WITHDRAW_HISTORY_SUCCESS:
      return {
        ...state,
        cryptoWithdrawHistory: {
          data: payload,
          errors: '',
        },
      };

    case types.GET_CRYPTO_WITHDRAW_HISTORY_FAILURE:
      return {
        ...state,
        cryptoWithdrawHistory: {
          data: [],
          errors: payload,
        },
      };

    // Get withdraw amount in usd
    case types.GET_WITHDRAW_AMOUNT_IN_USD_START:
      return { ...state };

    case types.GET_WITHDRAW_AMOUNT_IN_USD_SUCCESS:
      return {
        ...state,
        withdrawAmountInUsd: payload,
      };

    case types.GET_WITHDRAW_AMOUNT_IN_USD_FAILURE:
      return {
        ...state,
        withdrawAmountInUsd: null,
      };

    // Get withdraw whitelist addresses
    case types.GET_WITHDRAW_WHITELIST_ADDRESSES_START:
      return { ...state };

    case types.GET_WITHDRAW_WHITELIST_ADDRESSES_SUCCESS:
      return {
        ...state,
        withdrawalWhitelistAddresses: {
          data: payload,
          errors: '',
        },
      };

    case types.GET_WITHDRAW_WHITELIST_ADDRESSES_FAILURE:
      return {
        ...state,
        withdrawalWhitelistAddresses: {
          data: [],
          errors: payload,
        },
      };

    // Update withdraw whitelist addresses
    case types.UPDATE_WITHDRAW_WHITELIST_ADDRESSES_START:
      return { ...state };

    case types.UPDATE_WITHDRAW_WHITELIST_ADDRESSES_SUCCESS:
      return {
        ...state,
        withdrawalWhitelistAddresses: {
          data: payload,
          errors: '',
        },
      };

    case types.UPDATE_WITHDRAW_WHITELIST_ADDRESSES_FAILURE:
      return {
        ...state,
        withdrawalWhitelistAddresses: {
          data: [],
          errors: payload,
        },
      };

    // clear all history
    case types.CLEAR_ALL_HISTORY_SUCCESS:
      return {
        ...state,
        fiatHistory: {
          data: [],
          errors: '',
        },
        cryptoHistory: {
          data: [],
          errors: '',
        },
        fiatWithdrawHistory: {
          data: [],
          errors: '',
        },
        cryptoWithdrawHistory: {
          data: [],
          errors: '',
        },
      };

    // locked token - dba analysis
    case types.GET_DBA_ANALYSIS_START:
      return { ...state, isLoading: true };

    case types.GET_DBA_ANALYSIS_SUCCESS:
      return {
        ...state,
        dbaAnalysis: payload,
        isLoading: false,
      };

    case types.GET_DBA_ANALYSIS_FAILURE:
      return { ...state, isLoading: false };

    //  GET ASSET PAYMENTS
    case types.GET_PAYMENT_METHODS_START:
      return {
        ...state,
        isLoading: true,
        assetPayments: null,
      };

    case types.GET_PAYMENT_METHODS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        assetPayments: payload,
      };

    case types.GET_PAYMENT_METHODS_FAILURE:
      return {
        ...state,
        isLoading: false,
        assetPayments: null,
      };

    case types.CREATE_OZOW_REQUEST_START:
    case types.CREATE_OZOW_REQUEST_FAILURE:
    case types.CREATE_BANK_REQUEST_START:
    case types.CREATE_BANK_REQUEST_FAILURE:
      return {
        ...state,
        paymentLink: null,
      };

    case types.CREATE_OZOW_REQUEST_SUCCESS:
    case types.CREATE_BANK_REQUEST_SUCCESS:
    case types.MAKE_DAFRIBANK_PAYMENT_SUCCESS:
      return {
        ...state,
        paymentLink: payload,
      };

    case types.GET_CIRCLE_PUBLIC_KEY_START:
    case types.GET_CIRCLE_PUBLIC_KEY_FAILURE:
      return {
        ...state,
        circlePublicKey: null,
      };

    case types.GET_CIRCLE_PUBLIC_KEY_SUCCESS:
      return {
        ...state,
        circlePublicKey: payload,
      };

    default:
      return state;
  }
};

const initialStateAssets = {
  assets: [],
  loading: false,
};

export const assets = (state = initialStateAssets, action) => {
  switch (action.type) {
    case types.GET_ASSETS_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ASSETS_SUCCESS:
      return {
        ...state,
        assets: action.payload,
        loading: false,
      };
    case types.GET_ASSETS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    // case types.LOGOUT_SUCCESS:
    //   return initialStateAssets;
    default:
      return state;
  }
};
