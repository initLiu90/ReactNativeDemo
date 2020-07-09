const {handleActions} = require('redux-actions');
const {addTodo, updateTodo} = require('../../actions/todo');

export default handleActions(
  {
    [addTodo]: (state, {payload: {text, id}}) => {
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
