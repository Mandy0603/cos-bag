export const updateWishlist = cartProducts => dispatch => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  let cartTotal = {
    productQuantity,
    totalPrice,
    currencyId: "USD",
    currencyFormat: "$"
  };

  dispatch({
    type: "UPDATE_WISHLIST",
    payload: cartTotal
  });
};
