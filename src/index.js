import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './service/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'modern-normalize/modern-normalize.css';
import 'react-loader-spinner';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/ua-help/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
