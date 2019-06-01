const initialState = {
  wishItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishItems: action.payload };
    case "REMOVE_FROM_WISHLIST":
    // return { ...state, wishItems:  };

    default:
      return state;
  }
}
