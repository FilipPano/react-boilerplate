/**
 The quantity of the products that the user has.
 */
import { ProductsQuantityActions } from './actions';

const initialState = {
  productQuantity: 1,
  error: null,
};

export default function productsListReducer(state = initialState, action) {
  switch (action.type) {
    case ProductsQuantityActions.INCREASE_PRODUCT_QUANTITY_SUCCESS: {
      return {
        ...state,
        productQuantity: state.productQuantity + 1,
        error: null,
      };
    }

    case ProductsQuantityActions.INCREASE_PRODUCT_QUANTITY: {
      return {
        ...state,
        error: action.payload,
      };
    }
    
    default: {
      return state;
    }
  }
}
