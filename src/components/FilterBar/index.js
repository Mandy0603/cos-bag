import React from "react";
import BrandFilter from "./BrandFilter";
import TagFilter from "./TagFilter";
import CategoryFilter from "./CategoryFilter";
import SortBy from "./SortBy";
import "./style.scss";

const FilterBar = ({ category }) => {
  return (
    <div className="filterbar">
      <div className="filterbar__filters">
        <p>Filter by:</p>
        <CategoryFilter category={category} />
        <BrandFilter />
        <TagFilter />
      </div>
      <div className="filterbar__sortby">
        <SortBy />
      </div>
    </div>
  );
};
export default FilterBar;
