import React from "react";
import { HashRouter } from "react-router-dom";

import Nav from "./Nav";
import Content from "./Content";

class Viewport extends React.Component {
  state = {
    tabs: [{ to: "/" }, { to: "/portfolio" }, { to: "/resume" }]
  };

  onClickCase = route => {
    if (!this.state.tabs.find(tab => tab.to === route)) {
      this.setState({ tabs: [...this.state.tabs, { to: route }] });
    }
  };

  render() {
    return (
      <HashRouter>
        <div className="viewport">
          <Nav tabs={this.state.tabs} />
          <Content onClickCase={this.onClickCase} />
        </div>
      </HashRouter>
    );
  }
}

export default Viewport;
