import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import { store, persistor } from './redux/store';
import { axiosInterceptors } from './services/axiosInterceptors';
import Loader from './components/Base/Loader';
import { getLS, setLS } from './services/localStorage';
import { device_id } from './services/helpers';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './styles/css/index.css';

// eslint-disable-next-line no-console
console.log(
  `%cBuild version: ${process.env.REACT_APP_VERSION || 'localhost'}`,
  'color: #0B6623; background: #000; padding: 15px 50px; font-size: 16px;',
);

export const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  axiosInterceptors({ history, dispatch });

  if (!getLS('device_hash')) {
    setLS('device_hash', device_id());
  }

  return (
    <>
      <App />
      <NotificationContainer />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
