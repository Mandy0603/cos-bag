import React from "react";
import { connect } from "react-redux";

import SkynavComponents from "./SkynavComponents";
import history from "../../services/history";
import { updateMenuClassName } from "../../services/Menu/actions";

import Products from "./Products";
import "./style.scss";

class Navbar extends React.Component {
  // Close Menu Bar by clicking close button
  onCloseButtonClick = () => {
    this.props.updateMenuClassName("navbar__main navbar__main-closed");
  };

  // Close Menu Bar by clicking somewhere else
  onMenuBlur = () => {
    this.props.updateMenuClassName("navbar__main navbar__main-closed");
  };

  // render account information based on login status
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
      <div
        className={
          this.props.menuClassName || "navbar__main navbar__main-closed"
        }
        tabindex="1" //make this div focusable in order to use onBlur property
        onBlur={() => {
          this.onMenuBlur();
        }}
      >
        <ul className="navbar__list">
          <Products product={"Blush"} subcategory={["Powder", "Cream"]} />
          <Products product={"Bronzer"} subcategory={["Powder"]} />
          <Products product={"Eyebrow"} subcategory={["Pencil"]} />
          <Products
            product={"Eyeliner"}
            subcategory={["Liquid", "Pencil", "Gel", "Cream"]}
          />
          <Products
            product={"Eyeshadow"}
            subcategory={["Palette", "Pencil", "Cream"]}
          />
          <Products
            product={"Foundation"}
            subcategory={[
              "Liquid",
              "Contour",
              "Bb cc",
              "Concealer",
              "Cream",
              "Mineral",
              "Powder",
              "Highlighter"
            ]}
          />
          <Products product={"Lip Liner"} subcategory={["Pencil"]} />
          <Products
            product={"Lipstick"}
            subcategory={["Lipstick", "Lip Gloss", "Liquid", "Lip Stain"]}
          />
          <Products product={"Mascara"} subcategory={[""]} />
          <Products product={"Nail Polish"} subcategory={[""]} />
          <SkynavComponents
            onCloseButtonClick={this.onCloseButtonClick}
            renderAccount={this.renderAccount}
          />
        </ul>
        <div
          className="navbar__close"
          onClick={() => {
            this.onCloseButtonClick();
          }}
        >
          X
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    menuClassName: state.menu,
    loggedIn: state.user.isLoggedIn,
    userEmail: state.user.user
  };
};

export default connect(
  mapStateToProps,
  { updateMenuClassName }
)(Navbar);
