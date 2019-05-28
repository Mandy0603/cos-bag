import React from "react";
import { connect } from "react-redux";
import {
  updateBrandFilters,
  updateCategoryFilters,
  updateTagFilters
} from "../../services/Filters/actions";

class CloseButton extends React.Component {
  onButtonClick = () => {
    if (this.props.type === "brands") {
      const brandsNew = this.props.brands.filter(
        brand => brand !== this.props.item
      );
      this.props.updateBrandFilters(brandsNew);
    } else if (this.props.type === "tags") {
      const tagsNew = this.props.tags.filter(tag => tag !== this.props.item);
      this.props.updateTagFilters(tagsNew);
    } else {
      const categoryNew = this.props.category.filter(
        category => category !== this.props.item
      );
      this.props.updateCategoryFilters(categoryNew);
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
    category: state.filter.category
  };
};

export default connect(
  mapStateToProps,
  { updateBrandFilters, updateCategoryFilters, updateTagFilters }
)(CloseButton);
