export const updateCart = cartProducts => dispatch => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    let total = 0;
    if (p.color) {
      for (let i = 0; i < p.color.length; i++) {
        total += p.color[i].quantity;
      }
    }

    sum += total;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    let total = 0;
    if (p.color) {
      for (let i = 0; i < p.color.length; i++) {
        total += p.color[i].quantity;
      }
    }
    sum += p.price * total;
    return sum;
  }, 0);

  let cartTotal = {
    productQuantity,
    totalPrice,
    currencyId: "USD",
    currencyFormat: "$"
  };

  dispatch({
    type: "UPDATE_CART",
    payload: cartTotal
  });
};
