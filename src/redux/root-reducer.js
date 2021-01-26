import {combineReducers} from 'redux';

import userReducer from './user/user-reducer'
import foodReducer from './food/food-reducer'

export default combineReducers(
  {user:userReducer,food:foodReducer}
);