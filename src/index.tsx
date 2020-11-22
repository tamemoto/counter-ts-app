/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { counterReducer, initialState } from 'store/reducer';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const store = createStore(counterReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
