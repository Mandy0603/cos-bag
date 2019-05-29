import React, { Component } from "react";

import { connect } from "react-redux";
import { loadCart, removeProduct } from "../../services/Cart/actions";
import { updateCart } from "../../services/Total/actions";
import CartProduct from "./CartProduct";

import "./style.scss";

class FloatCart extends Component {
  state = {
    isOpen: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openFloatCart = () => {
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
    this.openFloatCart();
  };

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

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
      alert(`Checkout - Subtotal: ${currencyFormat} ${1}`);
    }
  };

  render() {
    const { cartTotal, cartProducts, removeProduct } = this.props;

    const products = cartProducts.map(p => {
      return (
        <CartProduct product={p} removeProduct={removeProduct} key={p.id} />
      );
    });

    let classes = ["float-cart"];

    if (!!this.state.isOpen) {
      classes.push("float-cart--open");
    }

    return (
      <div className={classes.join(" ")}>
        <div className="float-cart__shelf-container">
          {!!products.length && (
            <div>
              {products}
              <div className="float-cart__footer">
                <div className="sub">SUBTOTAL</div>
                <div className="sub-price">
                  <p className="sub-price__val">
                    {`${cartTotal.currencyFormat} ${1}`}
                  </p>
                </div>
                <div
                  onClick={() => this.proceedToCheckout()}
                  className="buy-btn"
                >
                  Checkout
                </div>
              </div>
            </div>
          )}
          {!products.length && (
            <p className="shelf-empty">
              Add some products in the cart <br />
              :)
            </p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct }
)(FloatCart);
