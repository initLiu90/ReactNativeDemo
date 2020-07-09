import {ADD_TODO, FILTER_TYPE, UPDATE_TODO} from './type';
import {createAction} from 'redux-actions';

let todoItemId = 0;

export const addTodo = createAction(ADD_TODO, text => ({
  text,
  id: todoItemId++,
}));

export const updateTodo = createAction(UPDATE_TODO, id => ({id}));

export const setFilter = createAction(FILTER_TYPE, filter => ({filter}));
