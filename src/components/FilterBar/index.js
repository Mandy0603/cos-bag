import React from "react";
import FilterDropdown from "./FilterDropdown";
import SortBy from "./SortBy";
import "./style.scss";

const FilterBar = () => {
  return (
    <div className="filterbar">
      <div className="filterbar__filters">
        <p>Filter by:</p>
        {/* subcategory */}
        <FilterDropdown />
        {/* brand */}
        {/* <FilterDropdown /> */}
        {/* tag */}
        {/* <FilterDropdown /> */}
      </div>
      <div className="filterbar__sortby">
        <p>Sort by:</p>
        <SortBy />
      </div>
    </div>
  );
};
export default FilterBar;
