import React, {Component} from 'react';
import AddTodo from '../components/AddTodo';
import Filter from '../components/Filter';
import TodoList from '../components/TodoList';

export default class TodoScreen extends Component {
  render() {
    return (
      <>
        <AddTodo />
        <Filter />
        <TodoList />
      </>
    );
  }
}
