import React, { Component } from "react";

import { connect } from "react-redux";
import history from "../../services/history";
import { loadCart, removeProduct } from "../../services/Cart/actions";
import { updateCart } from "../../services/Total/actions";
import { formatPrice } from "../../services/util";
import BagProduct from "./BagProduct";

import "./style.scss";

class ShoppingBag extends Component {
  proceedToCheckout = () => {
    const {
      totalPrice,
      productQuantity,
      currencyFormat,
      currencyId
    } = this.props.cartTotal;

    if (!productQuantity) {
      alert("Add some product in the cart!");
    } else {
      alert(
        `Checkout - Subtotal: ${currencyFormat} ${formatPrice(totalPrice)}`
      );
    }
  };
  formatPrice;
  render() {
    const { cartTotal, cartProducts, removeProduct } = this.props;

    const products = cartProducts.map(p => {
      return (
        <BagProduct product={p} removeProduct={removeProduct} key={p.id} />
      );
    });

    const orderSummary = cartProducts.map(p => {
      return (
        <div className="bag-container__summary-items">
          <div className="details-name">{p.name}</div>
          <div className="details-calc">
            <span className="quantity">Quantity: {p.quantity}</span>
            <span className="price">
              Unit Price: {"$"}
              {p.price}
            </span>
          </div>
        </div>
      );
    });

    return (
      <div className="shopping-bag">
        {!!products.length && (
          <div className="bag-container">
            <div className="bag-container__products">{products}</div>
            <div className="bag-container__summary">
              <div className="order-sub">
                <div className="order-sub__title">Order Summary</div>
                <div className="order-sub__details">{orderSummary}</div>
                <div className="order-sub__price">
                  <div>Total:</div>

                  <div>
                    {`${cartTotal.currencyFormat} ${formatPrice(
                      this.props.cartTotal.totalPrice
                    )}`}
                  </div>
                </div>
                <div
                  onClick={() => this.proceedToCheckout()}
                  className="order-sub__pay"
                >
                  Pay now
                </div>
              </div>
            </div>
          </div>
        )}
        {!products.length && (
          <div className="bag-empty">
            <h2 className="bag-empty__title">Shopping Bag</h2>
            <p className="bag-empty__paragraph">Your shopping bag is empty.</p>
            <p
              onClick={() => {
                history.push("/");
              }}
              className="bag-empty__ad"
            >
              Shop latest products
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  productToRemove: state.cart.productToRemove,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct }
)(ShoppingBag);
