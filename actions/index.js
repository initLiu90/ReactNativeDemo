import {ADD_TODO, FILTER_TYPE, UPDATE_TODO} from './type';

let todoItemId = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
    id: todoItemId++,
  };
};

export const updateTodo = id => {
  return {
    type: UPDATE_TODO,
    id: id,
  };
};

export const setFilter = type => {
  return {
    type: FILTER_TYPE,
    filter: type,
  };
};
