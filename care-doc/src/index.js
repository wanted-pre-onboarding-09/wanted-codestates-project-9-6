import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pageStepReducer from './store/pageStep';
import addressReducer from './store/addressSlice';
import careTypeReducer from './store/careType';
import phoneReducer from './store/phoneNumber';

const reducers = combineReducers({
  addresses: addressReducer,
  pageStep: pageStepReducer,
  careType: careTypeReducer,
  phone: phoneReducer,
});

const store = configureStore({
  reducer: reducers,
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
