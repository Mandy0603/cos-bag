import React from "react";
import { Link } from "react-router-dom";

class Products extends React.Component {
  renderSub = (subcategory, productWithoutSpace) => {
    return subcategory.map(sub => {
      const subWithoutSpace = sub.replace(/\s+/g, "");
      return (
        <li className="navbar__hidden-item" key={sub.toString()}>
          <Link
            to={`/shop/${productWithoutSpace}/${subWithoutSpace}`}
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
    const productWithoutSpace = product.replace(/\s+/g, "");
    return (
      <li className="navbar__item">
        <Link to={`/shop/${productWithoutSpace}/all`} class="navbar__link">
          {product}
        </Link>
        <div className="navbar__hidden">
          <ul className="navbar__hidden-list">
            {this.renderSub(subcategory, productWithoutSpace)}
          </ul>
        </div>
      </li>
    );
  }
}
export default Products;
