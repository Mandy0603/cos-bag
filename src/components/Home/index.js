import React from "react";

import Story from "./Story";
import Bestseller from "./Bestseller";

import "./style.scss";

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="cosmetic-pic" />
      <Story />
      <Bestseller />
    </div>
  );
};

export default Home;
