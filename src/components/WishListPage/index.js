import React, { Component } from "react";

import { connect } from "react-redux";
import history from "../../services/history";
import { removeFromWishlist } from "../../services/Wishlist/actions";
import { updateWishlist } from "../../services/WishlistTotal/actions";
import WishlistProduct from "./WishlistProduct";

import "./style.scss";

class WishListPage extends Component {
  render() {
    const { listProducts, removeFromWishlist } = this.props;

    const products = listProducts.map(p => {
      return (
        <WishlistProduct
          product={p}
          removeProduct={removeFromWishlist}
          key={p.id}
        />
      );
    });

    return (
      <div className="wishlist-items">
        {!!products.length && (
          <div className="list-container">
            <div className="list-container__title">
              <h2>Saved Items</h2>
            </div>
            <div className="list-container__products">{products}</div>
          </div>
        )}
        {!products.length && (
          <div className="list-empty">
            <h2 className="list-empty__title">Wishlist</h2>
            <p className="list-empty__paragraph">
              Add something to your wishlist
            </p>
            <p
              onClick={() => {
                history.push("/");
              }}
              className="list-empty__ad"
            >
              View latest trends
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listProducts: state.wishlist.products,
  productToRemove: state.wishlist.productToRemove
});

export default connect(
  mapStateToProps,
  { updateWishlist, removeFromWishlist }
)(WishListPage);
