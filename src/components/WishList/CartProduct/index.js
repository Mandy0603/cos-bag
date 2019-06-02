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
    const { product, removeProduct } = this.props;

    const classes = ["list-item"];

    if (!!this.state.isMouseOver) {
      classes.push("list-item--mouseover");
    }

    return (
      <div className={classes.join(" ")}>
        <div className="list-item__thumb">
          <img src={product.image_link} alt={product.name} />
        </div>
        <div className="list-item__text">
          <div
            className="list-item__text-del"
            onMouseOver={() => this.handleMouseOver()}
            onMouseOut={() => this.handleMouseOut()}
            onClick={() => removeProduct(product)}
          >
            X
          </div>

          <div className="list-item__text-details">
            <p className="brand">{product.brand}</p>
            <p className="name">{product.name}</p>
            <p className="price">{`${product.price_sign || "$"}  ${
              product.price
            }`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CartProduct;
