/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
import { take, fork, call, put, race, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import types from '../types';
import { updateBarBySockets } from '../../components/Base/Chart/datafeed/stream';
import { toUpdate, wsUrl } from '../../services/helpers';
import notification from '../../services/notification';

export const socketConnection = socketToken => {
  return new Promise((resolve, reject) => {
    let socket;
    if (socketToken) {
      socket = new WebSocket(`${wsUrl()}/?${socketToken}`, ['wamp']);
    } else {
      // console.log('not');
      socket = new WebSocket(`${wsUrl()}`, ['wamp']);
    }

    socket.onopen = () => {
      resolve(socket);
      // console.log('Соединение открыто');
    };
    socket.onerror = event => {
      reject(event);
    };
    socket.onclose = event => {
      if (event.wasClean) {
        // console.log('Соединение закрыто чисто');
      } else {
        // console.log('Обрыв соединения'); // например, "убит" процесс сервера
        // May be we need to make a conection here ?
      }
    };
  });
};

export const socketChannel = socket => {
  return eventChannel(emiter => {
    socket.onmessage = ({ data }) => {
      emiter(JSON.parse(data));
    };
    return () => {
      socket.close();
    };
  });
};

function* socketSend(socket) {
  const isOpenSocket = socket.readyState === socket.OPEN;

  if (isOpenSocket) {
    while (true) {
      const { payload } = yield take('SOCKET_SEND');
      socket.send(JSON.stringify(payload));
    }
  }
}

function* socketClose(socket) {
  while (true) {
    yield take('SOCKET_CLOSED');
    yield put({ type: 'SOCKET_DISCONNECTED' });
    socket.close();
  }
}
function* socketOnmessage(channel) {
  while (true) {
    const data = yield take(channel);
    if (+data[0] === 8) {
      switch (data[1].split(':')[0]) {
        case 'private-notifications':
          notification(data[2].data);
          break;
        case 'assets_pairs':
          yield put({
            type: types.UPDATE_ASSET_PAIRS,
            payload: data[2].data,
          });
          break;
        case 'order_book':
          yield put({
            type: types.UPDATE_SPOT_ORDER_BOOK,
            payload: data[2].data,
          });
          break;
        case 'trades':
          const recentTrades = yield select(
            store => store.trade.spot.recentTrades,
          );
          const newRecentTrades = yield [
            ...data[2].data,
            ...recentTrades,
          ].slice(0, 100);
          yield put({
            type: types.UPDATE_SPOT_RECENT_TRADES,
            payload: newRecentTrades,
          });
          if (data[2].data.length) {
            yield data[2].data.reverse().map(item =>
              updateBarBySockets({
                price: +item.price,
                time: +item.created_at * 1000,
                volume: +item.quantity,
              }),
            );
          }

          break;
        case 'open_orders':
          switch (data[1].split(':')[1]) {
            case 'spot':
              yield put({
                type: types.UPDATE_SPOT_OPEN_ORDERS,
                payload: data[2].data.orders,
              });
              break;
            default:
              break;
          }
          break;
        case 'balances':
          const wallets = yield select(store => store.wallets);
          const payload = yield toUpdate(data[2].data, wallets);
          yield put({
            type: types.UPDATE_WALLETS_LIST,
            payload,
          });
          break;

        case 'markets':
          yield put({
            type: types.UPDATE_MARKETS,
            payload: data[2].data,
          });
          break;

        case 'deposit':
          switch (data[2].data.status) {
            case 'completed':
              notification({
                type: 'success',
                timeOut: 25000,
                message: `Your payment in the amount of ${data[2].data.amount} was successfully completed`,
              });
              break;

            case 'error':
              notification({
                type: 'error',
                timeOut: 25000,
                message: `An error occurred while processing your ${data[2].data.amount} payment`,
              });
              break;

            case 'canceled':
              notification({
                type: 'error',
                timeOut: 25000,
                message: `Your payment in the amount of ${data[2].data.amount} has been canceled`,
              });
              break;

            default:
              break;
          }
          break;

        case 'dafri':
          if (data[2].data.status === 'Success') {
            notification({
              type: 'success',
              timeOut: 25000,
              message: `Your ${data[2].data.type} payment in the amount of ${data[2].data.amount} ${data[2].data.asset} was successfully completed`,
            });
          }
          break;

        default:
          break;
      }
    }
  }
}

export function* watchOnSocket() {
  try {
    while (true) {
      const { socketToken } = yield take('SOCKET_OPEN');
      // console.log('watchOnSocket SOCKET_OPEN', socketToken);
      const socket = yield call(socketConnection, socketToken);
      const channel = yield call(socketChannel, socket);

      if (socket.onopen) {
        yield put({ type: 'SOCKET_CONNECTED' });
      }

      yield fork(socketSend, socket);
      yield fork(socketClose, socket);

      const { cancel } = yield race({
        task: call(socketOnmessage, channel),
        cancel: take('SOCKET_CLOSED'),
      });

      if (cancel) {
        channel.close();
      }
    }
  } catch (error) {
    // console.log('watchOnSocket');
  }
}
