import React from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../services/Products/actions";
import Product from "./Product";
import Spinner from "../Spinner";

import "./style.scss";

class ProductList extends React.Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    console.log(this.props);
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const {
      productType,
      category,
      brandFilters,
      tagFilters,
      priceFilters,
      sortBy
    } = nextProps;

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
    if (priceFilters !== this.props.priceFilters) {
      this.handleFetchProducts(
        productType,
        category,
        undefined,
        undefined,
        priceFilters,
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
    priceFilters = this.props.priceFilters,
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
      priceFilters,
      sortBy,
      () => {
        this.setState({ isLoading: false });
      }
    );
  };
  renderProducts = products => {
    return products.map(product => {
      return <Product key={product.id} product={product} />;
    });
  };
  render() {
    const { products } = this.props;
    const { isLoading } = this.state;

    return (
      <React.Fragment>
        <div className="shelf__container">
          {/* {isLoading && <Spinner />} */}
          {this.renderProducts(products)}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  brandFilters: state.filter.brands,
  tagFilters: state.filter.tags,
  priceFilters: state.filter.price,
  sortBy: state.sort.type,
  products: state.products.products,
  category: ownProps.category.toLowerCase(),
  productType: ownProps.productType
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductList);
