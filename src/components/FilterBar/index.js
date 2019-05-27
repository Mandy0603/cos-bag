import React from "react";
import BrandFilter from "./BrandFilter";
import TagFilter from "./TagFilter";
import PriceFilter from "./PriceFilter";

import SortBy from "./SortBy";
import "./style.scss";

const FilterBar = () => {
  return (
    <div className="filterbar">
      <div className="filterbar__filters">
        {/* <p>Filter by:</p> */}
        <BrandFilter />
        <TagFilter />
        <PriceFilter />
      </div>
      <div className="filterbar__sortby">
        <SortBy />
      </div>
    </div>
  );
};
export default FilterBar;
