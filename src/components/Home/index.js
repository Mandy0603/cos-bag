import React from "react";

import Story from "./Story";
import CPics from "./CPics";
// import Bestseller from "./Bestseller";

const Home = () => {
  return (
    <div className="homepage-container">
      <CPics />
      <Story />
      {/* <Bestseller /> */}
    </div>
  );
};

export default Home;
