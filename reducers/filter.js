import {FILER_TYPE_ALL, FILTER_TYPE} from '../actions/type';

export default (state = FILER_TYPE_ALL, action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.filter;
    default:
      return state;
  }
};
