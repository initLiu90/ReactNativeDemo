import {handleAction} from 'redux-actions';
import {addArticle} from '../../actions/wan';

export const articles = handleAction(
  addArticle().type,
  (state, action) => {
    return [...state, ...action.payload];
  },
  [],
);
