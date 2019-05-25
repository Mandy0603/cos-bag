import React from "react";
import { Link } from "react-router-dom";

const ShopButton = ({ id, link, content }) => {
  return (
    <Link id={id} to={link} className="link__shop">
      {content}
      <span>&rarr;</span>
    </Link>
  );
};

export default ShopButton;
