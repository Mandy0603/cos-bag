import React from "react";
import { connect } from "react-redux";
import {
  updateBrandFilters,
  updatePriceFilters,
  updateTagFilters
} from "../../services/actions";
class CloseButton extends React.Component {
  onButtonClick = () => {
    if (this.props.category === "brands") {
      const brandsNew = this.props.brands.filter(
        brand => brand !== this.props.item
      );
      this.props.updateBrandFilters(brandsNew);
    } else if (this.props.category === "tags") {
      const tagsNew = this.props.tags.filter(tag => tag !== this.props.item);
      this.props.updateTagFilters(tagsNew);
    } else {
      const priceNew = this.props.price.filter(
        price => price !== this.props.item
      );
      this.props.updatePriceFilters(priceNew);
    }
    this.props.clickButton();
  };
  render() {
    return (
      <button onClick={this.onButtonClick} className="filter-result__close">
        X
      </button>
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

export default connect(
  mapStateToProps,
  { updateBrandFilters, updatePriceFilters, updateTagFilters }
)(CloseButton);
