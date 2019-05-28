import React from "react";
import ProductBreadcrumb from "../../Breadcrumb";
import FilterBar from "../../FilterBar";
import FilterResult from "../../FilterResult";
import ProductList from "../../ProductList";

import "../style.scss";

class Bronzer extends React.Component {
  render() {
    return (
      <div className="bronzer">
        <div className="bronzer__top">
          <img
            src={require("../../../static/img/carousel-1.jpg")}
            alt="display"
          />
        </div>
        <ProductBreadcrumb
          category={"Bronzer"}
          subcategory={this.props.match.params.subcategory}
        />
        <FilterBar category={"bronzer"} />
        <FilterResult pages={this.props.match.params.pages} />
        <ProductList
          productType={"bronzer"}
          category={this.props.match.params.subcategory}
          pages={this.props.match.params.pages}
        />
      </div>
    );
  }
}

export default Bronzer;
