import types from '../../types';

const initialState = {
  depositHistory: {},
  withdrawalHistory: {},
  loader: false,
};

// const data = [
//   {
//     amount: '10.00000000',
//     created_at: 1624441132,
//     status: 'unconfirmed',
//     asset_name: 'btc',
//     asset_id: 2,
//     icon: '/storage/assets/btc.png',
//     type: 'crypto',
//     information: 'aaa',
//     payment_system: null,
//   },
//   {
//     amount: 70,
//     created_at: 1624241632,
//     status: 'canceled',
//     asset_name: 'zar',
//     asset_id: 18,
//     icon: '/storage/assets/zar.png',
//     type: 'fiat',
//     information: '0hBYf2ubC8I0i7bH42NWkDIOCNbuUvdP1oyiPBO6',
//     payment_system: 'ozow',
//   },
//   {
//     amount: '10.00000000',
//     created_at: 1624346632,
//     status: 'confirmed',
//     asset_name: 'btc',
//     asset_id: 2,
//     icon: '/storage/assets/btc.png',
//     type: 'crypto',
//     information: 'aaa',
//     payment_system: null,
//   },
//   {
//     amount: 20,
//     created_at: 1624545632,
//     status: 'confirmed',
//     asset_name: 'zar',
//     asset_id: 18,
//     icon: '/storage/assets/zar.png',
//     type: 'fiat',
//     information: 'zVCdoDe9GRMto3pFTA0vhRwPz4TGD2VLzpUJYWWj',
//     payment_system: 'ozow',
//   },
//   {
//     amount: '10.00000000',
//     created_at: 1624646632,
//     status: 'confirmed',
//     asset_name: 'btc',
//     asset_id: 2,
//     icon: '/storage/assets/btc.png',
//     type: 'crypto',
//     information: 'aaa',
//     payment_system: null,
//   },
//   {
//     amount: 20,
//     created_at: 1624846132,
//     status: 'confirmed',
//     asset_name: 'zar',
//     asset_id: 18,
//     icon: '/storage/assets/zar.png',
//     type: 'fiat',
//     information: 'cb6ZdviiyUJwacXnFrJYmsupVuGl3KyrmZnP6sgE',
//     payment_system: 'ozow',
//   },
//   {
//     amount: 20,
//     created_at: 1624446232,
//     status: 'confirmed',
//     asset_name: 'zar',
//     asset_id: 18,
//     icon: '/storage/assets/zar.png',
//     type: 'fiat',
//     information: 'FvHHeulLs1TS8BpiOxUfeTlApcLm4wpGfQnMTkjy',
//     payment_system: 'ozow',
//   },
//   {
//     amount: 20,
//     created_at: 1624446332,
//     status: 'confirmed',
//     asset_name: 'zar',
//     asset_id: 18,
//     icon: '/storage/assets/zar.png',
//     type: 'fiat',
//     information: 'Hcf5qmPfHaiIOccmSNU1hZ7LI9UGbqupVJpUhF8b',
//     payment_system: 'ozow',
//   },
// ];

const history = (state = initialState, { type, payload }) => {
  switch (type) {
    // deposit history
    case types.GET_DEPOSIT_HISTORY_START:
      return { ...state, loader: true };

    case types.GET_DEPOSIT_HISTORY_SUCCESS:
      return { ...state, depositHistory: payload, loader: false };

    case types.GET_DEPOSIT_HISTORY_FAILURE:
      return { ...state, depositHistory: {}, loader: false };

    // withdrawal history
    case types.GET_WITHDRAWAL_HISTORY_START:
      return { ...state, loader: true };

    case types.GET_WITHDRAWAL_HISTORY_SUCCESS:
      return { ...state, withdrawalHistory: payload, loader: false };

    case types.GET_WITHDRAWAL_HISTORY_FAILURE:
      return { ...state, withdrawalHistory: {}, loader: false };

    // clear all history
    case types.CLEAR_ALL_HISTORY_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default history;
