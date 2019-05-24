import React from "react";
import "./style.scss";

const Skynav = () => {
  return (
    <div className="skynav">
      <div className="skynav__left">
        <div className="skynav__left map-marker">
          <i className="map marker alternate icon" />
        </div>
        <div className="skynav__left magnifying-glass ">
          <i className="search icon" />
        </div>
      </div>

      <div className="skynav__middle">
        <div className="skynav__middle brand-name">COS BAG</div>
      </div>

      <div className="skynav__right">
        <div className="skynav__right account">
          <i className="user outline icon" />
          <div>My Account</div>
        </div>
        <div className="skynav__right wish-list ">
          <i className="heart outline icon" />
        </div>
        <div className="skynav__right shopping-bag ">
          <i class="shopping bag icon" />
        </div>
      </div>
    </div>
  );
};

export default Skynav;
