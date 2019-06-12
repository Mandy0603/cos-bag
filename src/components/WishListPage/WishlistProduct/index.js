import React from "react";
import AdminButtons from "../../ProductList/AdminButtons";
import "./style.scss";

class WishlistProduct extends React.Component {
  render() {
    const { product } = this.props;
    let nameModified = product.name
      .replace("#", "-")
      .split(" ")
      .join("_");
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
        <AdminButtons
          product_link={product.product_link}
          product_type={product.product_type}
          nameModified={nameModified}
          id={product.id}
        />
      </div>
    );
  }
}

export default WishlistProduct;
