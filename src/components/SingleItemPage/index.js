import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../../services/Item/actions";
import { addProduct } from "../../services/Cart/actions";
import { addToWishlist } from "../../services/Wishlist/actions";
import QuantitySelector from "./QuantitySelector";
import Modal from "../Modal";

import "./style.scss";

class SingleItemPage extends React.Component {
  state = {
    isLoading: null,
    quantity: 1,
    color: null
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ isLoading: true });
    const { id } = this.props.match.params;
    this.props.fetchItem(id, () => this.setState({ isLoading: false }));
  }
  renderColors = colors => {
    return colors.map(color => {
      return (
        <div key={color.colour_name} className="descriptions__colors">
          <div
            className="descriptions__colors-display"
            style={{ backgroundColor: `${color.hex_value}` }}
          />
          <div className="descriptions__colors-hidden">{`${
            color.colour_name
          }`}</div>
        </div>
      );
    });
  };
  renderItem = () => {
    const {
      image_link,
      name,
      brand,
      description,
      price,
      product_colors
    } = this.props.item;
    return (
      <>
        <div className="item item__image">
          <img src={image_link} alt={name} />
        </div>
        <div className="item item__description">
          <div className="item__description-brand">{brand}</div>
          <div className="item__description-name">{name}</div>

          <div className="item__description-description">{description}</div>
          <div className="item__description-colors">
            <div className="item__description-colorsTitle">
              Available Colors:
            </div>
            <div className="item__description-colorsBlock">
              {this.renderColors(product_colors)}
            </div>
          </div>

          <div className="item__description-price">${price}</div>
          <div className="item__description-admin">
            <div className="item__description-admin-quantityAndColor">
              <QuantitySelector
                onQuantityChange={quantity => {
                  this.setState({ quantity: quantity });
                }}
              />
            </div>
            <div>
              <button
                onClick={() => this.onAddToBagClick()}
                className="item__description-admin-addToBag"
              >
                Add to Bag
              </button>
              <button
                onClick={() => this.onAddToWishlistClick()}
                className="item__description-admin-addToWishlist"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  onAddToBagClick = () => {
    this.props.item.quantity = this.state.quantity;
    this.props.addProduct(this.props.item);
  };
  onAddToWishlistClick = () => {
    this.props.addToWishlist(this.props.item);
  };

  render() {
    if (!this.state.isLoading) {
      return (
        <div className="item item__container">
          {!!this.props.item && this.renderItem()}
        </div>
      );
    } else {
      return <Modal />;
    }
  }
}
const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(
  mapStateToProps,
  { addToWishlist, fetchItem, addProduct }
)(SingleItemPage);
