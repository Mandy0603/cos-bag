import React from "react";
import { Provider } from "react-redux";

import store from "./services/store";

// Redux Dev Tools
/*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Root = ({ children }) => (
  <Provider
    store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}
  >
    {children}
  </Provider>
);
*/

const Root = ({ children, initialState = {} }) => {
  return <Provider store={store(initialState)}>{children}</Provider>;
};

export default Root;
