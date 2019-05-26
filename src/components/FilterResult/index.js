import React from "react";
import { connect } from "react-redux";
import CloseButton from "./CloseButton";
import "./style.scss";

class FilterResult extends React.Component {
  state = { buttonClicked: false };
  clickButton = () => {
    this.setState(({ buttonClicked }) => ({ buttonClicked: !buttonClicked }));
  };
  render() {
    return (
      <div className="filter-result">
        <div className="filter-result__number">Showing</div>
        <div className="filter-result__content">
          {this.props.brands.map(brand => {
            return (
              <div key={brand.toString()} className="filter-result__category">
                <div className="filter-result__brand">{brand}</div>
                <CloseButton
                  category="brands"
                  item={brand}
                  clickButton={this.clickButton}
                />
              </div>
            );
          })}
          {this.props.tags.map(tag => {
            return (
              <div key={tag.toString()} className="filter-result__category">
                <div className="filter-result__tag">{tag}</div>
                <CloseButton
                  category="tags"
                  item={tag}
                  clickButton={this.clickButton}
                />
              </div>
            );
          })}
          {this.props.price.map(price => {
            return (
              <div key={price.toString()} className="filter-result__category">
                <div className="filter-result__price">{price}</div>
                <CloseButton
                  category="price"
                  item={price}
                  clickButton={this.clickButton}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    brands: state.filter.brands,
    tags: state.filter.tags,
    price: state.filter.price
  };
};

export default connect(mapStateToProps)(FilterResult);
