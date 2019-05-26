import React from "react";
import FilterButton from "../FilterButton";
import PriceCollapse from "./PriceCollapse";

class PriceFilter extends React.Component {
  render() {
    return (
      <FilterButton filter={"Price"} collapseComponent={<PriceCollapse />} />
    );
  }
}

export default PriceFilter;
