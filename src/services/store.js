import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem("state")) || initialState;
  const middleware = [thunk];

  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total,
      wishlist: state.wishlist,
      wishlistTotal: state.wishlistTotal
    };
    window.localStorage.setItem("state", JSON.stringify(persist));
  });
  return store;
};
