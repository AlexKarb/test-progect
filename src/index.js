import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import 'modern-normalize/modern-normalize.css';
import 'react-loader-spinner';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/ua-help/">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
