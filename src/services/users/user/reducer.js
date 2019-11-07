/**
 All  user properties
 */
import { UserActions } from './actions';
import User from './models/User';

const initialState = {
  user: new User({}),
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActions.GET_USER:
      return {
        ...state,
        user: new User({}),
        loading: true,
        error: null,
      };

    case UserActions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case UserActions.GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
