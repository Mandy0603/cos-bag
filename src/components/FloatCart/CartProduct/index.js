import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./style.scss";

class CartProduct extends Component {
  componentWillReceiveProps(props) {
    console.log("cardProduct:" + props);
  }
  render() {
    const { product, removeProduct } = this.props;
    return product.color.map(color => {
      return (
        <ProductCard
          product={product}
          removeProduct={removeProduct}
          color={color}
        />
      );
    });
  }
}

export default CartProduct;
