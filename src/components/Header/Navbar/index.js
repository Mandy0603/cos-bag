import React from "react";
import "./style.scss";
import Products from "./Products";

const Navbar = () => {
  return (
    <div className="global-navbar__main-nav">
      <ul className="global-navbar__list">
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
        <Products product={"LipLiner"} subcategory={["Pencil"]} />
        <Products
          product={"Lipstick"}
          subcategory={["Lipstick", "Lip Gloss", "Liquid", "Lip Stain"]}
        />
        <Products product={"Mascara"} subcategory={[""]} />
        <Products product={"NailPolish"} subcategory={[""]} />
      </ul>
    </div>
  );
};

export default Navbar;
