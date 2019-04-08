import { combineReducers } from 'redux';
import productQuantityReducer from 'services/products/product-quantity/reducer';

export default combineReducers({
  productQuantity: productQuantityReducer,
});
