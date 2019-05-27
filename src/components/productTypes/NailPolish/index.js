import React from "react";
import ProductBreadcrumb from "../../Breadcrumb";
import FilterBar from "../../FilterBar";
import FilterResult from "../../FilterResult";
import ProductList from "../../ProductList";

import "../style.scss";

class NailPolish extends React.Component {
  render() {
    return (
      <div className="blush">
        <div className="blush__top">
          <img
            src={require("../../../static/img/carousel-1.jpg")}
            alt="display"
          />
        </div>
        <ProductBreadcrumb
          category={"Nail Polish"}
          subcategory={this.props.match.params.subcategory}
        />
        <FilterBar />
        <FilterResult />
        <ProductList
          productType={"Nail_Polish"}
          category={this.props.match.params.subcategory}
        />
      </div>
    );
  }
}

export default NailPolish;
