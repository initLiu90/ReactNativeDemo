const {createSelector} = require('reselect');

import {
  FILER_TYPE_ALL,
  FILER_TYPE_COMPLETE,
  FILER_TYPE_ACTIVE,
} from '../actions/type';

const getTodos = state => state.todo;
const getFilter = state => state.filter;

export const todoSelector = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case FILER_TYPE_ACTIVE:
        return todos.filter(item => !item.complete);
      case FILER_TYPE_COMPLETE:
        return todos.filter(item => item.complete);
      case FILER_TYPE_ALL:
        return todos;
      default:
        return todos;
    }
  },
);
