import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./services/reducers";

const Root = ({ children }) => (
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    {children}
  </Provider>
);

export default Root;
