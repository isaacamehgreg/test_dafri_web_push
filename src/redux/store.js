/* eslint-disable import/no-cycle */
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducers';
import { rootSaga } from './rootSagaWatcher';

export const sagaMiddleware = createSagaMiddleware();
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
    : applyMiddleware(thunk, sagaMiddleware);

export const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
