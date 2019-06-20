export const loadCart = products => ({
  type: "LOAD_CART",
  payload: products
});

export const addProduct = products => ({
  type: "ADD_PRODUCT",
  payload: products
});

export const removeProduct = (product, color) => ({
  type: "REMOVE_PRODUCT",
  payload: { product, color }
});
