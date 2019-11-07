import User from './models/User';

export const UserActions = {
  GET_USER: '@user/',
  GET_USER_SUCCESS: '@user/success',
  GET_USER_FAIL: '@user/fail',
};

export function getUser() {
  return {
    type: UserActions.GET_USER,
  };
}

export function getUserSuccess(user) {
  return {
    type: UserActions.GET_USER_SUCCESS,
    payload: new User(user),
  };
}

export function getUserFail(error) {
  return {
    payload: error,
    type: UserActions.GET_USER_FAIL,
  };
}
