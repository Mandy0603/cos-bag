import { combineReducers } from "redux";
import filterReducer from "./Filters/reducer";
import sortReducer from "./Sort/reducer";
import productReducer from "./Products/reducer";
import cartReducer from "./Cart/reducer";
import wishlistReducer from "./Wishlist/reducer";
import totalReducer from "./Total/reducer";
import wishlistTotalReducer from "./WishlistTotal/reducer";
import singleItemReducer from "./Item/reducer";

export default combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  products: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  total: totalReducer,
  wishlistTotal: wishlistTotalReducer,
  item: singleItemReducer
});
