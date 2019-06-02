const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "LOAD_WISHLIST":
      return { ...state, products: action.payload };
    case "ADD_TO_WISHLIST":
      return { ...state, productToAdd: Object.assign({}, action.payload) };
    case "REMOVE_FROM_WISHLIST":
      return { ...state, productToRemove: Object.assign({}, action.payload) };
    default:
      return state;
  }
}
