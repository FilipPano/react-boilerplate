export const ProductsQuantityActions = {
  INCREASE_PRODUCT_QUANTITY: '@productsList/increase',
  INCREASE_PRODUCT_QUANTITY_SUCCESS: '@productsList/increase/success',
  INCREASE_PRODUCT_QUANTITY_FAIL: '@productsList/increase/fail',
};

export function increaseProductsQuantity() {
  return {
    type: ProductsQuantityActions.INCREASE_PRODUCT_QUANTITY,
  };
}

export function increaseProductsQuantitySuccess() {
  return {
    type: ProductsQuantityActions.INCREASE_PRODUCT_QUANTITY_SUCCESS,
  };
}

export function increaseProductsQuantityFail(error) {
  return {
    payload: error,
    type: ProductsQuantityActions.INCREASE_PRODUCT_QUANTITY_SUCCESS,
  };
}
