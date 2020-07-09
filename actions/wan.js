import {WAN_ADD_ARTICLE} from './type';
import {createAction} from 'redux-actions';

export const addArticle = createAction(WAN_ADD_ARTICLE, article => article);

export const fetchArticle = () => dispatch => {
  return fetch('https://wanandroid.com/wxarticle/chapters/json')
    .then(response => response.json())
    .then(responseJson => dispatch(addArticle(responseJson.data)))
    .catch(error => console.log(error));
};
