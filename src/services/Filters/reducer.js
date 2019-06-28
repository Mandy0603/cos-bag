const initialState = {
  brands: [],
  tags: [],
  category: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_BRAND_FILTER":
      return {
        ...state,
        brands: action.payload
      };
    case "UPDATE_TAG_FILTER":
      return {
        ...state,
        tags: action.payload
      };
    case "UPDATE_CATEGORY_FILTER":
      return {
        ...state,
        category: action.payload
      };
    case "RESET_FILTERS":
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
}
