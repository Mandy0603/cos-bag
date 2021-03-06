import React from "react";
import firebase from "firebase";
import { connect } from "react-redux";

import { userChange } from "../../services/User/actions";
import history from "../../services/history";
import FloatCart from "../FloatCart";
import WishList from "../WishList";
import { updateMenuClassName } from "../../services/Menu/actions";
import "./style.scss";

class Skynav extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBAYIcLo5cduX0r5u-mcs0I9arYEpokX2E",
      authDomain: "cos-bag.firebaseapp.com",
      databaseURL: "https://cos-bag.firebaseio.com",
      projectId: "cos-bag",
      storageBucket: "cos-bag.appspot.com",
      messagingSenderId: "897734427465",
      appId: "1:897734427465:web:4463dd7000015c46"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.userChange(true, user.email);
      } else {
        this.props.userChange(false, null);
      }
    });
  }
  onSignOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };
  displayCartItemNumber = () => {
    if (this.props.cartItemQuantity !== 0) {
      return this.props.cartItemQuantity;
    } else return null;
  };
  displayWishlistItemNumber = () => {
    if (this.props.wishlistItemQuantity !== 0) {
      return this.props.wishlistItemQuantity;
    } else return null;
  };
  renderAccount = () => {
    if (this.props.loggedIn) {
      return (
        <div className="user-admin">
          <div
            className="welcome"
            onClick={() => history.push("/customers/userInfo")}
          >
            {this.props.userEmail}
          </div>
          <button className="sign-out" onClick={this.onSignOut}>
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div
          className="user-account"
          onClick={() => history.push("/customers/myaccount")}
        >
          My Account
        </div>
      );
    }
  };
  render() {
    return (
      <div className="skynav">
        <div className="skynav__left">
          {/* Only shown menu when max-width is 1024px */}
          <div className="skynav__left menu">
            <i
              onClick={() => {
                this.props.updateMenuClassName(
                  "navbar__main navbar__main-open"
                );
              }}
              className="list ul icon"
            />
          </div>

          {/* Homepage icon */}
          <div className="house">
            <i
              onClick={() => {
                history.push("/");
              }}
              className="home icon"
            />
          </div>

          {/* to Google Maps component */}
          <div
            onClick={() => {
              history.push("/storelocation");
            }}
            className="map-marker "
          >
            <i className="map marker alternate icon" />
          </div>
        </div>

        {/* Website name */}
        <div
          onClick={() => {
            history.push("/");
          }}
          className="skynav__middle"
        >
          <div className="skynav__middle brand-name">COS BAG</div>
        </div>

        <div className="skynav__right">
          {/* User Account */}
          <div className="skynav__right account">
            <i className="user outline icon" />
            {this.renderAccount()}
          </div>
          {/* Wishlist */}
          <div className="skynav__right wishlist ">
            <div
              onClick={() => {
                history.push("/shop/wishlist");
              }}
              className="wishlist__display"
            >
              <i className="heart outline icon" />
              <span>{this.displayWishlistItemNumber()}</span>
            </div>
            {/* Wishlist collapse */}
            <div className="wishlist__hidden">
              <WishList />
            </div>
          </div>
          {/* Shopping Bag */}
          <div className="shopping-bag ">
            <div
              onClick={() => {
                history.push("/shop/shoppingbag");
              }}
              className="shopping-bag__display"
            >
              <i className="shopping bag icon" />
              <span>{this.displayCartItemNumber()}</span>{" "}
            </div>
            {/* Shopping bag collapse */}
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
  return {
    cartItemQuantity: state.total.data.productQuantity,
    wishlistItemQuantity: state.wishlist.products.length,
    loggedIn: state.user.isLoggedIn,
    userEmail: state.user.user
  };
};

export default connect(
  mapStateToProps,
  { updateMenuClassName, userChange }
)(Skynav);
