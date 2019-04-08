import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  increaseProductsQuantityFail,
  increaseProductsQuantitySuccess,
  ProductsQuantityActions,
} from './actions';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
const error = 'Something went wrong when increasing the products\' quantity';

function* getProductsList() {
  const data = yield axios.get(url)
    .then(response => (response.data))
    .catch(() => (error));

  if (data === error) {
    yield put(increaseProductsQuantityFail(data));
  } else {
    yield put(increaseProductsQuantitySuccess());
  }
}

const productsListEffects = [
  takeLatest(ProductsQuantityActions.INCREASE_PRODUCT_QUANTITY, getProductsList),
];

export default productsListEffects;
