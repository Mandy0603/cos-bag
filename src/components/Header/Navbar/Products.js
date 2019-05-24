import React from "react";
import { Link } from "react-router-dom";

class Products extends React.Component {
  renderSub = subcategory => {
    return subcategory.map(sub => {
      return (
        <li className="global-navbar__hidden-item" key={sub.toString()}>
          <Link
            to={`/shop/${this.props.product}/${sub}`}
            className="navbar-headers"
          >
            {sub}
          </Link>
        </li>
      );
    });
  };
  render() {
    const { product, subcategory } = this.props;
    return (
      <li className="global-navbar__item">
        <Link to={`/shop/${product}/all`} class="global-navbar__link">
          {product}
        </Link>
        <div className="global-navbar__hidden">
          <ul className="global-navbar__hidden-list">
            {this.renderSub(subcategory)}
          </ul>
        </div>
      </li>
    );
  }
}
export default Products;
