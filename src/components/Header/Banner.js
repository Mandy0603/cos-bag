import React from "react";

const Banner = () => {
  return (
    <div className="global-top-banner">
      <div className="global-top-banner__slide">
        <a href="#" className="global-top-banner__link">
          <div className="global-top-banner__text">
            <strong>Free Shipping </strong>over $35*
          </div>
        </a>
      </div>

      <div className="global-top-banner__slide">
        <a href="#" className="global-top-banner__link">
          <div className="global-top-banner__text">
            <strong>Same Day Dispatch</strong> order by 2pm via express*
          </div>
        </a>
      </div>

      <div className="global-top-banner__slide">
        <a href="#" className="global-top-banner__link">
          <div className="global-top-banner__text">
            <strong>Free Returns</strong> within 30 days*
          </div>
        </a>
      </div>

      <div className="global-top-banner__slide">
        <a href="#" className="global-top-banner__link">
          <div className="global-top-banner__text">
            <strong>Complimentary Samples</strong> with every order
          </div>
        </a>
      </div>
    </div>
  );
};

export default Banner;
