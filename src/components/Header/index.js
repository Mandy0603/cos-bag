import React from "react";
import Banner from "./Banner";
import Skynav from "./Skynav";
import Navbar from "./Navbar";
import "./style.scss";

const Header = () => {
  return (
    <div className="global-top-header">
      <Banner />
      <Skynav />
      <Navbar />
    </div>
  );
};

export default Header;
