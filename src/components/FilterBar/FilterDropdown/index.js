import React from "react";
import FilterCollapse from "./FilterCollapse";
import "./style.scss";

const FilterDropdown = () => {
  return (
    <div>
      <button className="btn-dropdown">
        <div className="btn-dropdown__title">
          Brand
          <span>
            <i class="caret down icon" />
          </span>
        </div>

        {/* <i class="caret up icon" /> */}
      </button>
      <FilterCollapse />
    </div>
  );
};

export default FilterDropdown;
