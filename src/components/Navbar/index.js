import React from "react";
import { connect } from "react-redux";
import history from "../../services/history";
import { updateMenuClassName } from "../../services/Menu/actions";
import "./style.scss";
import Products from "./Products";

class Navbar extends React.Component {
  onCloseButtonClick = () => {
    this.props.updateMenuClassName("navbar__main navbar__main-closed");
  };
  onMenuBlur = () => {
    this.props.updateMenuClassName("navbar__main navbar__main-closed");
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
      <div
        className={
          this.props.menuClassName || "navbar__main navbar__main-closed"
        }
        tabindex="1"
        onBlur={() => {
          this.onMenuBlur();
        }}
      >
        <ul className="navbar__list">
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
            product={"Blush"}
            subcategory={["Powder", "Cream"]}
          />
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
            product={"Bronzer"}
            subcategory={["Powder"]}
          />
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
            product={"Eyebrow"}
            subcategory={["Pencil"]}
          />
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
            product={"Eyeliner"}
            subcategory={["Liquid", "Pencil", "Gel", "Cream"]}
          />
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
            product={"Eyeshadow"}
            subcategory={["Palette", "Pencil", "Cream"]}
          />
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
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
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
            product={"Lip Liner"}
            subcategory={["Pencil"]}
          />
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
            product={"Lipstick"}
            subcategory={["Lipstick", "Lip Gloss", "Liquid", "Lip Stain"]}
          />
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
            product={"Mascara"}
            subcategory={[""]}
          />
          <Products
            onSomethingSelected={() => this.onCloseButtonClick()}
            product={"Nail Polish"}
            subcategory={[""]}
          />
          <div className="skynavComponents">
            <div
              onClick={() => {
                history.push("/storelocation");
                this.onCloseButtonClick();
              }}
              className=" navbar__item skynavComponents__location"
            >
              <i className="map marker alternate icon" />
              Locate store
            </div>
            <div
              onClick={() => this.onCloseButtonClick()}
              className="navbar__item skynavComponents__account"
            >
              <i className="user outline icon" />
              {this.renderAccount()}
            </div>
          </div>
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
