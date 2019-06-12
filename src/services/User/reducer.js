const initialState = {
  isLoggedIn: null,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "USER_CHANGE":
      return {
        ...state,
        isLoggedIn: action.payload.loggedIn,
        user: action.payload.user
      };
    default:
      return state;
  }
}
