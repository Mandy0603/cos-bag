export default (state = null, action) => {
  switch (action.type) {
    case "UPDATE_MENU_CLASSNAME":
      return action.payload;
    default:
      return state;
  }
};
