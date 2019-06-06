import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../../services/Item/actions";
import QuantitySelector from "./QuantitySelector";

import "./style.scss";

class SingleItemPage extends React.Component {
  state = {
    isLoading: false
  };
  componentWillMount() {
    console.log(this.props);
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
            <QuantitySelector />
          </div>
        </div>
      </>
    );
  };
  render() {
    console.log(this.props.item);

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
  { fetchItem }
)(SingleItemPage);
