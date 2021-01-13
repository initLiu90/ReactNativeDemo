/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {main} from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(main);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

    );
  }
}
