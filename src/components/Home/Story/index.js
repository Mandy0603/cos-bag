import React from "react";
import ShopButton from "./ShopButton";
import "./style.scss";

const Story = () => {
  return (
    <div className="cosmetic-story">
      <div className="cosmetic-story__double">
        <div className="cosmetic-story__double-1">
          <div className="picture-1">
            <img
              src={require("../../../static/img/story-lipstick.jpg")}
              alt="story 1"
            />
          </div>
          <div className="cosmetic-text">
            <p className="number">01</p>
            <h2>My favourite lipsticks</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              volutpat sit amet ligula vitae feugiat.
            </p>
            <ShopButton link={"/shop/lipstick/all"} content={"shop now"} />
          </div>
        </div>

        <div id="cosmetic-story__double-2" className="cosmetic-story__double-2">
          <div className="cosmetic-text">
            <p className="number">02</p>
            <div id="story2-linkbox">
              <h2 id="story2-h2">Flawless Face</h2>
              <ShopButton
                id="story2-link"
                link="/shop/foundation/all"
                content={"shop now"}
              />
            </div>
            <p id="description-2" className="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="picture-2">
            <img
              src={require("../../../static/img/story-foundation.jpeg")}
              alt="story 2"
            />
          </div>
        </div>
      </div>

      <div className="cosmetic-story__single">
        <div className="cosmetic-story__single-1">
          <div className="picture-3">
            <img
              src={require("../../../static/img/story-nailpolish.jpg")}
              alt="story 3"
            />
          </div>
          <div id="cosmetic-text3" className="cosmetic-text">
            <p className="number">03</p>
            <h2 id="story3-h2">Colorful nails, Colorful life</h2>
            <p id="description-3" className="description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <ShopButton
              id="story3-link"
              link="/shop/nailpolish/all"
              content={"read more"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
