import React from "react";
import { connect } from "react-redux";
import history from "../../services/history";
import FloatCart from "../FloatCart";
import "./style.scss";

class Skynav extends React.Component {
  render() {
    return (
      <div className="skynav">
        <div className="skynav__left">
          <div className="map-marker">
            <i
              onClick={() => {
                history.push("/");
              }}
              class="home icon"
            />
          </div>
          <div className="magnifying-glass ">
            <i className="search icon" />
          </div>
        </div>

        <div className="skynav__middle">
          <div className="skynav__middle brand-name">COS BAG</div>
        </div>

        <div className="skynav__right">
          <div className="skynav__right account">
            <i className="user outline icon" />
            <div>My Account</div>
          </div>
          <div className="skynav__right wish-list ">
            <i className="heart outline icon" />
          </div>
          <div className="shopping-bag ">
            <div
              onClick={() => {
                history.push("/shop/shoppingbag");
              }}
              className="shopping-bag__display"
            >
              <i className="shopping bag icon" />
              <span>{this.props.itemQuantity}</span>{" "}
            </div>
            <div className="shopping-bag__hidden">
              <FloatCart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { itemQuantity: state.total.data.productQuantity };
};

export default connect(mapStateToProps)(Skynav);
