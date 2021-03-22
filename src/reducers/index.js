import { combineReducers } from 'redux';
import games from './games';
import user from './user';

const rootReducer = combineReducers({ games, user });

export default rootReducer;
