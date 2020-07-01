const {handleActions} = require('redux-actions');
const {addTodo, updateTodo} = require('../actions');

export default handleActions(
  {
    [addTodo]: (state, {payload: {id, text}}) => {
      return [...state, {id: id, text: text, complete: false}];
    },
    [updateTodo]: (state, action) => {
      return state.map(todo =>
        todo.id === action.payload.id
          ? {...todo, complete: !todo.complete}
          : {...todo},
      );
    },
  },
  [],
);
