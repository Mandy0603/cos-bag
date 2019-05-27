const initialState = {
  brands: [],
  tags: [],
  price: []
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
    case "UPDATE_PRICE_FILTER":
      return {
        ...state,
        price: action.payload
      };

    default:
      return state;
  }
}
