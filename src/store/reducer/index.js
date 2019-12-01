import { combineReducers } from 'redux';
import { userReducer } from 'services/users/user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});
