import React from "react";
import FilterButton from "../FilterButton";
import BrandCollapse from "./BrandCollapse";

class BrandFilter extends React.Component {
  render() {
    return (
      <div className="filter__container">
        <p className="filter__container-title">Filter by:</p>
        <FilterButton filter={"Brand"} collapseComponent={<BrandCollapse />} />
      </div>
    );
  }
}

export default BrandFilter;
