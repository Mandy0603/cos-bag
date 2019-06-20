import React, { Component } from "react";
import "./style.scss";

class CartProduct extends Component {
  render() {
    const { product, removeProduct } = this.props;
    if (!product.color) {
      product.color = Array();
    }
    return product.color.map(color => {
      return (
        <div className="bag-item">
          <div className="bag-item__thumb">
            <img src={product.image_link} alt={product.name} />
          </div>
          <div className="bag-item__text">
            <div
              className="bag-item__text-del"
              onClick={() => removeProduct(product, color)}
            >
              X
            </div>

            <div className="bag-item__text-details">
              <p className="brand">{product.brand}</p>
              <p className="name">{product.name}</p>
              <p className="selectedColor">Color:{color.name}</p>
              <p className="quantity">Quantity: {color.quantity}</p>
              <p className="price">{`${product.price_sign || "$"}  ${
                product.price
              }`}</p>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default CartProduct;
