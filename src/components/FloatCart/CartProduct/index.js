import React, { Component } from "react";

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

    const classes = ["shelf-item"];

    if (!!this.state.isMouseOver) {
      classes.push("shelf-item--mouseover");
    }

    return (
      <div className={classes.join(" ")}>
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        >
          X
        </div>
        <img
          classes="shelf-item__thumb"
          src={product.image_link}
          alt={product.name}
        />
        <div className="shelf-item__details">
          <p className="title">{product.brand}</p>
          <p className="desc">
            {product.name} <br />
            Quantity: {product.quantity}
          </p>
        </div>
        <div className="shelf-item__price">
          <p>{`${product.price_sign}  ${product.price}`}</p>
        </div>
      </div>
    );
  }
}

export default CartProduct;
