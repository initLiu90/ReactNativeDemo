/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import {createStore, compose} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import TodoList from './components/TodoList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <Filter />
        <TodoList />
      </Provider>
    );
  }
}
