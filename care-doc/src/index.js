import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pageStepReducer from './store/pageStep';
import staticDataReducer from './store/staticData';
import addressReducer from './store/addressSlice';

const reducers = combineReducers({
  pageStep: pageStepReducer,
  static: staticDataReducer,
  addresses: addressReducer,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
