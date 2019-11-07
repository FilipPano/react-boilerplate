import { all } from 'redux-saga/effects';
import userEffects from 'services/users/user/effects';

export default function* rootSaga() {
  yield all([
    ...userEffects,
  ]);
}
