import { combineReducers } from 'redux';
import userReducer from 'services/users/user/reducer';

export default combineReducers({
  user: userReducer,
});
