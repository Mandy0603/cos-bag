import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./style.scss";

class CartProduct extends Component {
  render() {
    const { product, removeProduct } = this.props;

    return <ProductCard product={product} removeProduct={removeProduct} />;
  }
}

export default CartProduct;
