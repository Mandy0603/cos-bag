import React, { Component } from "react";
import "./style.scss";

class CartProduct extends Component {
  state = {
    isMouseOver: false
  };

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  render() {
    const classes = ["shelf-item"];
    if (!!this.state.isMouseOver) {
      classes.push("shelf-item--mouseover");
    }

    const { product, removeProduct } = this.props;
    if (!product.color) {
      product.color = Array();
    }

    return product.color.map((color, i) => {
      return (
        <div key={i} className={classes.join(" ")}>
          <div className="shelf-item__thumb">
            <img src={product.image_link} alt={product.name} />
          </div>
          <div className="shelf-item__text">
            <div
              className="shelf-item__text-del"
              onMouseOver={() => this.handleMouseOver()}
              onMouseOut={() => this.handleMouseOut()}
              onClick={() => removeProduct(product, color)}
            >
              X
            </div>

            <div className="shelf-item__text-details">
              <p className="brand">{product.brand}</p>
              <p className="name">{product.name}</p>
              <p className="selectedColor">Color: {color.name}</p>
              <p className="quantity">Quantity: {color.quantity}</p>
              <p className="price">{`${product.price_sign ||
                "$"}  ${product.price || "0.0"}`}</p>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default CartProduct;
