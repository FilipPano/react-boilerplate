import { all } from 'redux-saga/effects';
import productQuantityEffects from 'services/products/product-quantity/effects';


export default function* rootSaga() {
  yield all([
    ...productQuantityEffects,
  ]);
}
