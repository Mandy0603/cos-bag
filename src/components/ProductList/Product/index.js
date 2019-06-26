import React from "react";
import { connect } from "react-redux";
import history from "../../../services/history";
import AdminButtons from "../AdminButtons";

import { addToWishlist } from "../../../services/Wishlist/actions";
import Checkbox from "./Checkbox";
import ColorBlock from "../ColorBlock";

class Product extends React.Component {
  renderColor = colors => {
    return colors.map(color => {
      return <ColorBlock color={color} />;
    });
  };

  render() {
    const {
      brand,
      name,
      price,
      image_link,
      product_link,
      product_colors,
      product_type,
      id
    } = this.props.product;
    let nameModified = name.replace("#", "-");
    nameModified = nameModified.split(" ").join("_");

    return (
      <div className="product__container">
        <div
          onClick={() => {
            history.push(`/view/${product_type}/${nameModified}/${id}`);
          }}
          className="product__image"
        >
          <img src={image_link} alt={name} />
        </div>
        <div className="product__wish-list ">
          <Checkbox product={this.props.product} />
        </div>
        <div className="product__description">
          <div className="product__description-top">
            <div className="product__brand">
              <h4>
                <strong>{brand}</strong>
              </h4>
            </div>
            <div className="product__name">
              <h3>{name}</h3>
            </div>
          </div>

          <div className="product__description-bottom">
            <div className="product__price">
              <span>{"$"}</span>
              <h4>{price || "0.0"}</h4>
            </div>
            <div className="product__color">
              {this.renderColor(product_colors)}
            </div>
          </div>
        </div>
        <AdminButtons
          product_link={product_link}
          product_type={product_type}
          nameModified={nameModified}
          id={id}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addToWishlist }
)(Product);
