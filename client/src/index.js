import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/styles.css';
import './Resources/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import think from './middleware/think';
// import promiseMiddleware from 'redux-promise';
import ourPromise from './middleware/promise';
import logger from './middleware/logger';
// import ReduxThunk from 'redux-thunk';

import Reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ourPromise, think, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
