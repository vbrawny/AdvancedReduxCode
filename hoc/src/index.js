import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
