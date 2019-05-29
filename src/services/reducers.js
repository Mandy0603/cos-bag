import { combineReducers } from "redux";
import filterReducer from "./Filters/reducer";
import sortReducer from "./Sort/reducer";
import productReducer from "./Products/reducer";
import cartReducer from "./Cart/reducer";
import totalReducer from "./Total/reducer";

export default combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  products: productReducer,
  cart: cartReducer,
  total: totalReducer
});
