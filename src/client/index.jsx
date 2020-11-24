import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '../mead/components/app/index.jsx';
import configureStore from './configureStore.jsx';

const store = configureStore();

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
