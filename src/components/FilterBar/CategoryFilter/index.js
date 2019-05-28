import React from "react";
import FilterButton from "../FilterButton";
import CategoryCollapse from "./CategoryCollapse";

class CategoryFilter extends React.Component {
  render() {
    return (
      <FilterButton
        filter={"Category"}
        collapseComponent={<CategoryCollapse category={this.props.category} />}
      />
    );
  }
}

export default CategoryFilter;
