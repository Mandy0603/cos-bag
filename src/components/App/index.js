import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../../services/history";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home";
import Blush from "../productTypes/Blush";
import Bronzer from "../productTypes/Bronzer";
import Eyebrow from "../productTypes/Eyebrow";
import Eyeliner from "../productTypes/Eyeliner";
import Eyeshadow from "../productTypes/Eyeshadow";
import Foundation from "../productTypes/Foundation";
import LipLiner from "../productTypes/LipLiner";
import Lipstick from "../productTypes/Lipstick";
import Mascara from "../productTypes/Mascara";
import NailPolish from "../productTypes/NailPolish";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop/blush/:subcategory" exact component={Blush} />
            <Route
              path="/shop/bronzer/:subcategory"
              exact
              component={Bronzer}
            />
            <Route
              path="/shop/eyebrow/:subcategory"
              exact
              component={Eyebrow}
            />
            <Route
              path="/shop/eyeliner/:subcategory"
              exact
              component={Eyeliner}
            />
            <Route
              path="/shop/eyeshadow/:subcategory"
              exact
              component={Eyeshadow}
            />
            <Route
              path="/shop/foundation/:subcategory"
              exact
              component={Foundation}
            />
            <Route
              path="/shop/lipliner/:subcategory"
              exact
              component={LipLiner}
            />
            <Route
              path="/shop/lipstick/:subcategory"
              exact
              component={Lipstick}
            />
            <Route
              path="/shop/mascara/:subcategory"
              exact
              component={Mascara}
            />
            <Route
              path="/shop/nailpolish/:subcategory"
              exact
              component={NailPolish}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
