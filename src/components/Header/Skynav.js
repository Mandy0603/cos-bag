import React from "react";

const Skynav = () => {
  return (
    <div className="global-top-skynav">
      <div className="global-top-skynav__left-container">
        <div className="global-top-skynav__left-container global-top-skynav__map-marker">
          <i className="map marker alternate icon" />
        </div>

        <div className="global-top-skynav__left-container global-top-skynav__magnifying-glass ">
          <i className="search icon" />
        </div>
      </div>
      <div className="global-top-skynav__middle-container">
        <div className="global-top-skynav__middle-container global-top-skynav__brand-name">
          COS BAG
        </div>
      </div>

      <div className="global-top-skynav__right-container">
        <div className="global-top-skynav__right-container global-top-skynav__account">
          <i className="user outline icon" />
          <div>My Account</div>
        </div>

        <div className="global-top-skynav__right-container global-top-skynav__wish-list ">
          <i className="heart outline icon" />
        </div>

        <div className="global-top-skynav__right-container global-top-skynav__shopping-bag ">
          <i class="shopping bag icon" />
        </div>
      </div>
    </div>
  );
};

export default Skynav;
