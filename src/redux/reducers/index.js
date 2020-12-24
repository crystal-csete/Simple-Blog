import { combineReducers } from 'redux';
import newItem from './newItem';
import posts from './posts';

export default combineReducers({
    newItem,
    posts,
});