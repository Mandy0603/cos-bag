export const loadWishlist = products => ({
  type: "LOAD_WISHLIST",
  payload: products
});

export const addToWishlist = products => ({
  type: "ADD_TO_WISHLIST",
  payload: products
});

export const removeFromWishlist = products => ({
  type: "REMOVE_FROM_WISHLIST",
  payload: products
});
