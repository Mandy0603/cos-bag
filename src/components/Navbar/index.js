import React from "react";
import "./style.scss";
import Products from "./Products";

class Navbar extends React.Component {
  state = { isCloseButtonClicked: false };
  toggleCloseButton = () => {
    this.setState(({ isCloseButtonClicked }) => ({
      isCloseButtonClicked: !isCloseButtonClicked
    }));
  };
  onCloseButtonClick = () => {};

  render() {
    let listClassName;

    return (
      <div className="navbar__main">
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

export default Navbar;
