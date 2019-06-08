import axios from "axios";
import { productsAPI } from "../util";

export const fetchItem = (id, callback) => dispatch => {
  axios
    .get(productsAPI)
    .then(res => {
      let items = res.data;
      const item = items.filter(i => i.id == id)[0];
      if (!!callback) {
        callback();
      }
      return dispatch({
        type: "FETCH_ITEM",
        payload: item
      });
    })
    .catch(err => {
      console.log("Could not fetch item. Try again later");
    });
};
