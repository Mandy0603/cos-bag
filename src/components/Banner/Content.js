import React from "react";

const Content = props => {
  return (
    <div className="banner__slide">
      <div className="banner__text">
        <strong>{props.strong} </strong>
        {props.normal}
      </div>
    </div>
  );
};

export default Content;
