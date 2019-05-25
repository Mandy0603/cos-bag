import React from "react";
import ProductBreadcrumb from "../../Breadcrumb";
import FilterBar from "../../FilterBar";

import "./style.scss";

const Blush = props => {
  return (
    <div className="blush">
      <div className="blush__top">
        <img
          src={require("../../../static/img/carousel-1.jpg")}
          alt="display"
        />
      </div>
      <ProductBreadcrumb
        category={"Blush"}
        subcategory={props.match.params.subcategory}
      />
      <FilterBar />
    </div>
  );
};

export default Blush;
