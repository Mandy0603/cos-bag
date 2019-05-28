import axios from "axios";
import { productsAPI } from "../util";

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const fetchProducts = (
  productType,
  category,
  brandFilters,
  tagFilters,
  categoryFilters,
  sortBy,
  callback
) => dispatch => {
  axios
    .get(`${productsAPI}?product_type=${productType}`)
    .then(res => {
      let products = res.data;

      if (!!category && category.length > 0) {
        products = products.filter(p => p.category === category);
      }
      if (!!brandFilters && brandFilters.length > 0) {
        products = products.filter(p =>
          brandFilters.find(bf => p.brand === bf)
        );
      }
      if (!!tagFilters && tagFilters.length > 0) {
        products = products.filter(p =>
          tagFilters.find(tf => p.tag_list.find(tag => tag === tf))
        );
      }
      if (!!categoryFilters && categoryFilters.length > 0) {
        products = products.filter(p =>
          categoryFilters.find(
            cf => p.category === cf.replace(" ", "_").toLowerCase()
          )
        );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }
      if (!!callback) {
        callback();
      }
      return dispatch({
        type: "FETCH_PRODUCTS",
        payload: products
      });
    })
    .catch(err => {
      console.log("Could not fetch products. Try again later");
    });
};
