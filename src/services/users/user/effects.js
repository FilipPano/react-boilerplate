import { takeLatest, put, call } from 'redux-saga/effects';
import { getUserFail, getUserSuccess, UserActions } from './actions';
import { getUserAPI } from './api';
import User from './models/User';

function getRandomUserId() {
  return Math.floor(Math.random() * 10) + 1;
}

function* getUser() {
  try {
    const user = yield call(getUserAPI, getRandomUserId());
    yield put(getUserSuccess(new User(user)));
  } catch (e) {
    yield put(getUserFail(e));
  }
}

export const userEffects = [
  takeLatest(UserActions.GET_USER, getUser),
];
