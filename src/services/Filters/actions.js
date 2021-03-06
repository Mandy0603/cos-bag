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

export const updateCategoryFilters = filters => {
  return {
    type: "UPDATE_CATEGORY_FILTER",
    payload: filters
  };
};

export const resetFilters = () => {
  return {
    type: "RESET_FILTERS"
  };
};
