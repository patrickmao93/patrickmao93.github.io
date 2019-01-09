import React from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import Content from "./Content";

class Viewport extends React.Component {
  state = {
    tabs: [{ to: "/" }, { to: "/portfolio" }, { to: "/resume" }]
  };

  onClickCase = tabName => {
    this.setState({ tabs: [...this.state.tabs, { to: tabName }] });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="viewport">
          <Nav tabs={this.state.tabs} />
          <Content onClickCase={this.onClickCase} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Viewport;
