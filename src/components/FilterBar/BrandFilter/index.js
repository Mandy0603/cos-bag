import React from "react";
import FilterButton from "../FilterButton";
import BrandCollapse from "./BrandCollapse";

class BrandFilter extends React.Component {
  render() {
    return (
      <FilterButton filter={"Brand"} collapseComponent={<BrandCollapse />} />
    );
  }
}

export default BrandFilter;
