import React from "react";
import "./style.scss";

class WishlistProduct extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="wishlist-item">
        <div className="wishlist-item__image">
          <img src={product.image_link} alt={product.id} />
        </div>
        <div
          onClick={() => this.props.removeProduct(product)}
          className="wishlist-item__remove"
        >
          X
        </div>
        <div className="wishlist-item__text">
          <p className="brand">{product.brand}</p>
          <p className="name">{product.name}</p>
          <p className="price">{`${product.price_sign || "$"}  ${
            product.price
          }`}</p>
        </div>
      </div>
    );
  }
}

export default WishlistProduct;
