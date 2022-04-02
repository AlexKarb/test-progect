import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import 'modern-normalize/modern-normalize.css';
import './index.css';

// import { exempleOfResponse1, exempleOfResponse2 } from 'Service/exemple_of_res';
// import { postPublication } from 'Service/api-service';

// import { editPublication } from 'components/Service/api-service';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-progect/">
      <Provider store={store}>
        {/* {postPublication(exempleOfResponse1)}
        {postPublication(exempleOfResponse2)} */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
