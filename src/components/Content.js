import React from "react";
import { Route, Switch } from "react-router-dom";

import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const Content = props => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/resume" exact component={Resume} />
      </Switch>
    </div>
  );
};

export default Content;
