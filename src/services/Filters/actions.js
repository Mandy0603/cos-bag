export const updateBrandFilters = filters => {
  return {
    type: "UPDATE_BRAND_FILTER",
    payload: filters
  };
};

export const updateTagFilters = filters => {
  return {
    type: "UPDATE_TAG_FILTER",
    payload: filters
  };
};

export const updatePriceFilters = filters => {
  return {
    type: "UPDATE_PRICE_FILTER",
    payload: filters
  };
};
