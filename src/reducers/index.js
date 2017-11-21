import { combineReducers } from 'redux';

import user from './user/reducer';
import expenses from './expenses/reducer';

const appReducer = combineReducers({ user, expenses });

export default appReducer;
