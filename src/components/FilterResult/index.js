import React from "react";
import { connect } from "react-redux";

import CloseButton from "./CloseButton";
import { resetFilters } from "../../services/Filters/actions";
import "./style.scss";

class FilterResult extends React.Component {
  state = { buttonClicked: false };
  clickButton = () => {
    this.setState(({ buttonClicked }) => ({ buttonClicked: !buttonClicked }));
  };
  calculateItems = () => {
    let pageCount;
    if (!this.props.pages) {
      pageCount = 1;
    } else {
      pageCount = this.props.pages;
    }
    return pageCount * 36 > this.props.products.length
      ? this.props.products.length
      : pageCount * 36;
  };
  render() {
    return (
      <div className="filter-result">
        <div className="filter-result__contentContainer">
          <div className="filter-result__content">
            {this.props.brands.map(brand => {
              return (
                <div key={brand.toString()} className="filter-result__category">
                  <div className="filter-result__brand">{brand}</div>
                  <CloseButton
                    type="brands"
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
                    type="tags"
                    item={tag}
                    clickButton={this.clickButton}
                  />
                </div>
              );
            })}
            {this.props.category.map(category => {
              return (
                <div
                  key={category.toString()}
                  className="filter-result__category"
                >
                  <div className="filter-result__subcategory">{category}</div>
                  <CloseButton
                    type="category"
                    item={category}
                    clickButton={this.clickButton}
                  />
                </div>
              );
            })}
          </div>
          {!!(
            this.props.brands.length !== 0 ||
            this.props.tags.length !== 0 ||
            this.props.category.length !== 0
          ) && (
            <div
              className="filter-result__resetButton"
              onClick={this.props.resetFilters}
            >
              Reset Filters
              <i class="trash alternate outline icon" />
            </div>
          )}
        </div>
        <div className="filter-result__number">
          Showing {this.calculateItems()} of {this.props.products.length} items
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    brands: state.filter.brands,
    tags: state.filter.tags,
    category: state.filter.category,
    products: state.products.products,
    pages: ownProps.pages
  };
};

export default connect(
  mapStateToProps,
  { resetFilters }
)(FilterResult);
