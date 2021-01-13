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
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './router';
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
            <Provider store={store}>
                <NavigationContainer>{RootStack()}</NavigationContainer>
            </Provider>
        );
    }
}
