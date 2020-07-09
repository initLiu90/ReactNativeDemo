import {FILER_TYPE_ALL, FILTER_TYPE} from '../../actions/type';
import {handleAction} from 'redux-actions';
import {setFilter} from '../../actions/todo';

// export default (state = FILER_TYPE_ALL, action) => {
//   switch (action.type) {
//     case FILTER_TYPE:
//       return action.filter;
//     default:
//       return state;
//   }
// };

export default handleAction(
  [setFilter],
  (state, action) => action.payload.filter,
  FILER_TYPE_ALL,
);
