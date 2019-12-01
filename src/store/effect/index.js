import { all } from 'redux-saga/effects';
import { userEffects } from 'services/users/user/effects';

export function* rootSaga() {
  yield all([
    ...userEffects,
  ]);
}
