import React from "react";
import ProductBreadcrumb from "../../Breadcrumb";
import FilterBar from "../../FilterBar";
import FilterResult from "../../FilterResult";
import ProductList from "../../ProductList";

import "../style.scss";

class Blush extends React.Component {
  render() {
    return (
      <div className="blush">
        {/* <div className="blush__top">
          <img
            src={require("../../../static/img/carousel-1.jpg")}
            alt="display"
          />
        </div> */}
        <ProductBreadcrumb
          category={"Blush"}
          subcategory={this.props.match.params.subcategory}
        />
        <FilterBar category={"blush"} />
        <FilterResult pages={this.props.match.params.pages} />
        <ProductList
          productType={"blush"}
          category={this.props.match.params.subcategory}
          pages={this.props.match.params.pages}
        />
      </div>
    );
  }
}

export default Blush;
