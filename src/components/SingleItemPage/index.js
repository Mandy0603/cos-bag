import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../../services/Item/actions";
import { addProduct } from "../../services/Cart/actions";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";

import "./style.scss";

class SingleItemPage extends React.Component {
  state = {
    isLoading: false,
    quantity: 1,
    color: null
  };
  componentWillMount() {
    const { id } = this.props.match.params;

    this.props.fetchItem(id);
  }
  renderColors = colors => {
    return colors.map(color => {
      return (
        <div className="descriptions__colors">
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
              <ColorSelector
                colors={product_colors}
                onSelectionChange={color => {
                  this.setState({ color: color });
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
            </div>
          </div>
        </div>
      </>
    );
  };
  onAddToBagClick = () => {
    let { color } = this.props.item;
    let stateColor = this.state.color;
    let stateQuantity = this.state.quantity;

    if (stateColor) {
      if (this.props.item.color) {
        let found = false;
        for (let i = 0; i < this.props.item.color.length; i++) {
          if (Object.keys(this.props.item.color[i]) == stateColor) {
            this.props.item.color[i][
              Object.keys(this.props.item.color[i])
            ] += stateQuantity;
            found = true;
            break;
          }
        }
        if (!found) {
          this.props.item.color.push({ [stateColor]: stateQuantity });
        }
        console.log(this.props.item.color);
      } else {
        this.props.item.color = Array({
          [stateColor]: stateQuantity
        });
        this.props.addProduct(this.props.item);
      }
    } else {
      return null;
    }
  };
  render() {
    return (
      <div className="item item__container">
        {!!this.props.item && this.renderItem()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(
  mapStateToProps,
  { fetchItem, addProduct }
)(SingleItemPage);
