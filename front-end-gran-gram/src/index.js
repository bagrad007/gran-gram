import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import reducers from './reducers/index.js'

import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

