import React from "react";
import { connect } from "react-redux";
import history from "../../services/history";

import { fetchProducts } from "../../services/Products/actions";
import Product from "./Product";
import Modal from "../Modal";

import "./style.scss";

class ProductList extends React.Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const {
      productType,
      category,
      brandFilters,
      tagFilters,
      categoryFilters,
      sortBy
    } = nextProps;

    if (category !== this.props.category) {
      this.handleFetchProducts(
        productType,
        category,
        undefined,
        undefined,
        undefined,
        undefined
      );
    }

    if (brandFilters !== this.props.brandFilters) {
      this.handleFetchProducts(
        productType,
        category,
        brandFilters,
        undefined,
        undefined,
        undefined
      );
    }
    if (tagFilters !== this.props.tagFilters) {
      this.handleFetchProducts(
        productType,
        category,
        undefined,
        tagFilters,
        undefined,
        undefined
      );
    }
    if (categoryFilters !== this.props.categoryFilters) {
      this.handleFetchProducts(
        productType,
        category,
        undefined,
        undefined,
        categoryFilters,
        undefined
      );
    }
    if (sortBy !== this.props.sortBy) {
      this.handleFetchProducts(
        productType,
        category,
        undefined,
        undefined,
        undefined,
        sortBy
      );
    }
  }

  handleFetchProducts = (
    productType = this.props.productType,
    category = this.props.category,
    brandFilters = this.props.brandFilters,
    tagFilters = this.props.tagFilters,
    categoryFilters = this.props.categoryFilters,
    sortBy = this.props.sortBy
  ) => {
    this.setState({ isLoading: true });
    let subcategory;
    if (category === "all") {
      subcategory = null;
    } else {
      subcategory = category;
    }

    this.props.fetchProducts(
      productType,
      subcategory,
      brandFilters,
      tagFilters,
      categoryFilters,
      sortBy,
      () => {
        this.setState({ isLoading: false });
      }
    );
  };
  renderProducts = products => {
    let pagesShow;
    if (!this.props.pages) {
      pagesShow = 1;
    } else {
      pagesShow = this.props.pages;
    }
    return products.slice(0, 36 * pagesShow).map(product => {
      return <Product key={product.id} product={product} />;
    });
  };
  loadMorePages = page => {
    let nextPage = page + 1;
    let productTypeWithoutSpace;
    productTypeWithoutSpace = this.props.productType.replace(/\s+/g, "");
    history.push(
      `/shop/${productTypeWithoutSpace}/${this.props.category}/${nextPage}`
    );
  };

  renderViewmoreButton = () => {
    let pagesShow;
    if (!this.props.pages) {
      pagesShow = 1;
    } else {
      pagesShow = this.props.pages;
    }
    if (pagesShow * 36 < this.props.products.length) {
      return (
        <button
          onClick={() => {
            this.loadMorePages(pagesShow);
          }}
        >
          View More
          <i className="caret down icon" />
        </button>
      );
    } else {
      if (!this.state.isLoading) {
        return (
          <button>
            <a href="#bread_crumb">
              Back to Top
              <i className="caret up icon" />
            </a>
          </button>
        );
      }
    }
  };
  render() {
    const { products } = this.props;
    const { isLoading } = this.state;

    return (
      <React.Fragment>
        <div className="shelf__container">
          {isLoading && (
            <div className="shelf__spinner">
              <Modal />
            </div>
          )}
          <div className="shelf__list">{this.renderProducts(products)}</div>
          {products.length === 0 && !isLoading && (
            <div className="nothing">
              <img
                src={require("../../static/img/robot.png")}
                alt="No items found pic"
                className="nothing__pic"
              />
              <div className="nothing__text">
                Oops! There is nothing to display
              </div>
            </div>
          )}

          <div className="btn__operation">{this.renderViewmoreButton()}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  brandFilters: state.filter.brands,
  tagFilters: state.filter.tags,
  categoryFilters: state.filter.category,
  sortBy: state.sort.type,
  products: state.products.products,
  category: ownProps.category.toLowerCase() || null,
  productType: ownProps.productType,
  pages: ownProps.pages
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductList);
