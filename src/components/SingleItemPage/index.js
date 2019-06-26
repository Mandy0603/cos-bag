import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../../services/Item/actions";
import { addProduct } from "../../services/Cart/actions";
import { addToWishlist } from "../../services/Wishlist/actions";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";
import Modal from "../Modal";

import "./style.scss";

class SingleItemPage extends React.Component {
  state = {
    isLoading: null,
    quantity: 1,
    color: null,
    hint: false
  };

  onSelectionChange = color => {
    this.setState({ color: color });
    if (this.state.hint) {
      this.setState({ hint: false });
    }
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
  renderHint = () => {
    if (this.state.hint) {
      return "Please select a color";
    }
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

          <div className="item__description-price">${price || "0.0"}</div>
          <div className="item__description-admin">
            <div className="item__description-admin-quantityAndColor">
              <QuantitySelector
                onQuantityChange={quantity => {
                  this.setState({ quantity: quantity });
                }}
              />
              <ColorSelector
                onSelectionChange={this.onSelectionChange}
                colors={product_colors}
              />
            </div>

            <div className="item__hint">{this.renderHint()}</div>
            <div className="purchaseAndWishlist">
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
    if (!this.state.color) {
      this.setState({ hint: true });
      return;
    }
    const stateColor = this.state.color;
    const stateQuantity = this.state.quantity;

    const index = this.props.cartProducts.findIndex(
      product => product.id === this.props.item.id
    );
    if (index >= 0) {
      let flag = false;
      this.props.cartProducts[index].color.map(color => {
        if (color.name === stateColor) {
          color.quantity += stateQuantity;
          flag = true;
        }
      });
      if (!flag) {
        this.props.cartProducts[index].color.push({
          name: stateColor,
          quantity: stateQuantity
        });
      }
    } else {
      this.props.item.color = Array({
        name: stateColor,
        quantity: stateQuantity
      });
    }
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
  return { item: state.item, cartProducts: state.cart.products };
};

export default connect(
  mapStateToProps,
  { addToWishlist, fetchItem, addProduct }
)(SingleItemPage);
