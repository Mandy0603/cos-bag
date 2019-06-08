import React, { Component } from "react";

import { connect } from "react-redux";
import history from "../../services/history";

import {
  loadWishlist,
  removeFromWishlist
} from "../../services/Wishlist/actions";
import { updateWishlist } from "../../services/WishlistTotal/actions";

import CartProduct from "./CartProduct";

import "./style.scss";

class ItemList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  addProduct = product => {
    const { listProducts, updateWishlist } = this.props;
    let productAlreadyInCart = false;

    listProducts.forEach(lp => {
      if (lp.id === product.id) {
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      listProducts.push(product);
    }

    updateWishlist(listProducts);
  };

  removeProduct = product => {
    const { listProducts, updateWishlist } = this.props;

    const index = listProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      listProducts.splice(index, 1);
      updateWishlist(listProducts);
    }
  };

  viewWishlist = () => {
    history.push("/shop/wishlist");
  };

  render() {
    const { listProducts, removeFromWishlist } = this.props;

    const products = listProducts.map(p => {
      return (
        <CartProduct
          product={p}
          removeProduct={removeFromWishlist}
          key={p.id}
        />
      );
    });

    return (
      <div className="float-cart">
        {!!products.length && (
          <div className="shelf-container">
            <div className="shelf-container__products">{products}</div>
            <div className="shelf-container__footer">
              <div onClick={() => this.viewWishlist()} className="buy-btn">
                View Products in Wishlist <span>&rarr;</span>
              </div>
            </div>
          </div>
        )}
        {!products.length && (
          <div className="shelf-empty">
            <h2>Your Wishlist</h2>
            <p className="shelf-empty__paragraph">
              Add something to your wishlist.
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listProducts: state.wishlist.products,
  newProduct: state.wishlist.productToAdd,
  productToRemove: state.wishlist.productToRemove,
  wishlistTotal: state.wishlistTotal.data
});

export default connect(
  mapStateToProps,
  { loadWishlist, removeFromWishlist, updateWishlist }
)(ItemList);
