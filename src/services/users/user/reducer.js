/**
 * User info
 */
import { UserActions } from './actions';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActions.GET_USER:
      return {
        ...state,
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
