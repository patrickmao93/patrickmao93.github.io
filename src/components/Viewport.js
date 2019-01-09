import React from "react";
import { HashRouter } from "react-router-dom";

import Nav from "./Nav";
import Content from "./Content";

class Viewport extends React.Component {
  state = {
    tabs: [
      { to: "/", name: "Welcome", icon: "", closable: false },
      {
        to: "/portfolio",
        name: "Project Portfolio",
        icon: "fas fa-folder-open",
        closable: false
      },
      {
        to: "/resume",
        name: "Resume",
        icon: "fas fa-file-alt",
        closable: false
      }
    ]
  };

  onClickCase = newTab => {
    if (!this.state.tabs.find(tab => tab.to === newTab.to)) {
      this.setState({ tabs: [...this.state.tabs, newTab] });
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
