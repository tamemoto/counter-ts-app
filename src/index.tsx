/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// import { counterReducer, initialState } from 'store/reducer';
import { counterSlice } from 'features/counter';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

// const store = createStore(counterReducer, initialState);
const store = configureStore({ reducer: counterSlice.reducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
