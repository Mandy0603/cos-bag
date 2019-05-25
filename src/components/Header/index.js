import React from "react";
import Banner from "./Banner";
import Skynav from "./Skynav";
import Navbar from "./Navbar";

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
