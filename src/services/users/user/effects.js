import { takeLatest, put } from 'redux-saga/effects';
import { getUserFail, getUserSuccess, UserActions } from './actions';
import UserAPI from './api';

function getRandomUserId() {
  return Math.floor(Math.random() * 10) + 1;
}

function* getUser() {
  let apiCallFailed = false;

  const data = yield UserAPI.getUser(getRandomUserId())
    .then(res => res)
    .catch(err => {
      apiCallFailed = true;
      return err;
    });

  if (apiCallFailed) {
    yield put(getUserFail(data));
  } else {
    yield put(getUserSuccess(data));
  }
}

const userEffects = [
  takeLatest(UserActions.GET_USER, getUser),
];

export default userEffects;
