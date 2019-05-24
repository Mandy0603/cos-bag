import React from "react";

import Content from "./Content";
import "./style.scss";

const Banner = () => {
  return (
    <div className="banner">
      <Content strong={"Free Shipping "} normal={"over $35*"} />
      <Content
        strong={"Same Day Dispatch "}
        normal={"order by 2pm via express*"}
      />
      <Content strong={"Free Returns "} normal={"within 30 days*"} />
      <Content strong={"Complimentary Samples "} normal={"with every order"} />
    </div>
  );
};

export default Banner;
