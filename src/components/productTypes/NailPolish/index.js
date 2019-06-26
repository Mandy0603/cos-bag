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
        <ProductBreadcrumb
          category={"Nail Polish"}
          subcategory={this.props.match.params.subcategory}
        />
        <FilterBar category={"nailpolish"} />
        <FilterResult pages={this.props.match.params.pages} />
        <ProductList
          productType={"nail_polish"}
          category={this.props.match.params.subcategory}
          pages={this.props.match.params.pages}
        />
      </div>
    );
  }
}

export default NailPolish;
