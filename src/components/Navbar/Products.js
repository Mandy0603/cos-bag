import React from "react";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = { isArrowClicked: false };
  renderSub = (subcategory, productWithoutSpace) => {
    return subcategory.map(sub => {
      const subWithoutSpace = sub.replace(/\s+/g, "");
      return (
        <li className="navbar__hidden-item" key={sub.toString()}>
          <Link
            onClick={() => {
              this.props.onSomethingSelected();
            }}
            to={`/shop/${productWithoutSpace}/${subWithoutSpace}`}
            className="navbar-headers"
          >
            {sub}
          </Link>
        </li>
      );
    });
  };
  toggleArrowButton = () => {
    this.setState(({ isArrowClicked }) => ({
      isArrowClicked: !isArrowClicked
    }));
  };

  render() {
    const { product, subcategory } = this.props;
    const productWithoutSpace = product.replace(/\s+/g, "");
    let iconClassName;
    let hiddenListClassName;
    if (this.state.isArrowClicked) {
      iconClassName = "angle up icon";
      hiddenListClassName = "navbar__hidden navbar__hidden-open";
    } else {
      iconClassName = "angle down icon";
      hiddenListClassName = "navbar__hidden navbar__hidden-closed";
    }

    return (
      <li className="navbar__item">
        <div className="navbar__itemAndArrow">
          <Link
            onClick={() => {
              this.props.onSomethingSelected();
            }}
            to={`/shop/${productWithoutSpace}/all`}
            className="navbar__link"
          >
            {product}
          </Link>
          <div
            onClick={() => this.toggleArrowButton()}
            className="navbar__arrow"
          >
            <i className={iconClassName} />
          </div>
        </div>
        <div className={hiddenListClassName}>
          <ul className="navbar__hidden-list">
            {this.renderSub(subcategory, productWithoutSpace)}
          </ul>
        </div>
      </li>
    );
  }
}
export default Products;
