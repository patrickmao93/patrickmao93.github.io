import React from "react";
import { Route, Switch } from "react-router-dom";

import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

import Code from "./Code";

const Content = props => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/test" exact component={Code} />
      </Switch>
    </div>
  );
};

export default Content;
