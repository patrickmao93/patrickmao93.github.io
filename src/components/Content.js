import React from "react";
import { Route, Switch } from "react-router-dom";

import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Case from "./Case";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route
            path="/portfolio"
            exact
            render={() => <Portfolio onClickCase={this.props.onClickCase} />}
          />
          <Route path="/resume" exact component={Resume} />
          <Route path="/portfolio/:name" exact component={Case} />
        </Switch>
      </div>
    );
  }
}

export default Content;
