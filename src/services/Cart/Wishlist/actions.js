export const addWishlist = product => ({
  type: "ADD_TO_WISHLIST",
  payload: product
});

export const removeWishlist = product => ({
  type: "REMOVE_FROM_WISHLIST",
  payload: product
});
