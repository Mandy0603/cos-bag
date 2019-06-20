import React, { Component } from "react";

import { connect } from "react-redux";
import history from "../../services/history";
import { loadCart, removeProduct } from "../../services/Cart/actions";
import { updateCart } from "../../services/Total/actions";
import CartProduct from "./CartProduct";
import { formatPrice } from "../../services/util";

import "./style.scss";

class FloatCart extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity = product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
  };

  removeProduct = productToRemove => {
    const { product, color } = productToRemove;
    const { cartProducts, updateCart } = this.props;
    const index = cartProducts.findIndex(p => p.id === product.id);
    const indexColor = cartProducts.findIndex(
      p => p.id === product.id && p.color.length === 1 && p.color[0] === color
    );

    if (indexColor >= 0) {
      cartProducts.splice(indexColor, 1);
      updateCart(cartProducts);
    } else if (index >= 0) {
      const productColorIndex = cartProducts[index].color.findIndex(
        c => c.name === color.name
      );
      cartProducts[index].color.splice(productColorIndex, 1);

      updateCart(cartProducts);
    }
  };

  proceedToCheckout = () => {
    history.push("/shop/shoppingbag");
  };

  render() {
    const { cartTotal, cartProducts, removeProduct } = this.props;

    const products = cartProducts.map((p, i) => {
      return <CartProduct product={p} removeProduct={removeProduct} key={i} />;
    });

    return (
      <div className="float-cart">
        {!!products.length && (
          <div className="shelf-container">
            <div className="shelf-container__products">{products}</div>
            <div className="shelf-container__footer">
              <div className="subtotal">
                <div className="subtotal-title">SUBTOTAL</div>
                <div className="subtotal-price">
                  {`${cartTotal.currencyFormat} ${formatPrice(
                    this.props.cartTotal.totalPrice
                  )}`}
                </div>
              </div>
              <div onClick={() => this.proceedToCheckout()} className="buy-btn">
                Check out <span>&rarr;</span>
              </div>
            </div>
          </div>
        )}
        {!products.length && (
          <div className="shelf-empty">
            <h2>Shopping Bag</h2>
            <p className="shelf-empty__paragraph">
              Your shopping bag is empty.
            </p>
          </div>
        )}
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
