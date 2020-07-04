import React from "react";

import history from "../../services/history";

const SkynavComponents = ({ onCloseButtonClick, renderAccount }) => {
  return (
    <div className="skynavComponents">
      <div
        onClick={() => {
          history.push("/storelocation");
          onCloseButtonClick();
        }}
        className=" navbar__item skynavComponents__location"
      >
        <i className="map marker alternate icon" />
        Locate store
      </div>
      <div
        onClick={() => onCloseButtonClick()}
        className="navbar__item skynavComponents__account"
      >
        <i className="user outline icon" />
        {renderAccount()}
      </div>
    </div>
  );
};

export default SkynavComponents;
