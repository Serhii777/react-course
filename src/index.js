import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers';

const INITIAL_STATE = {
  session: {
    user: {
      name: 'John',
      email: 'john@doe.com'
    },
    authenticated: true,
    error: null,
  },
  posts: {
    items: [],
    loading: false,
    selectedTags: []
  }
};

const store = createStore(/* reducer(s), initialState, middleware */rootReducer, INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
