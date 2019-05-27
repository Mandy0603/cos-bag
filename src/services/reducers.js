import { combineReducers } from "redux";
import filterReducer from "./Filters/reducer";
import sortReducer from "./Sort/reducer";
import productReducer from "./Products/reducer";

export default combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  products: productReducer
});
