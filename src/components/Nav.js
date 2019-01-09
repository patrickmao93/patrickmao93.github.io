import React from "react";
import { NavLink } from "react-router-dom";

const renderTabContent = to => {
  switch (to) {
    case "/":
      return <span>Welcome</span>;
    case "/portfolio":
      return (
        <span>
          <i className="fas fa-folder-open" />
          <span>Project Portfolio</span>
        </span>
      );
    case "/resume":
      return (
        <span>
          <i className="fas fa-file-alt" />
          <span>Resume</span>
        </span>
      );
    default:
      return <span>Welcome</span>;
  }
};

const renderTabs = tabs => {
  return tabs.map(tab => (
    <NavLink
      to={tab.to}
      className="nav__link"
      activeClassName="nav__link--active"
      exact
    >
      {renderTabContent(tab.to)}
    </NavLink>
  ));
};

const Nav = props => {
  return <nav className="nav">{renderTabs(props.tabs)}</nav>;
  // <nav className="nav">
  //   <NavLink
  //     to="/"
  //     className="nav__link"
  //     activeClassName="nav__link--active"
  //     exact
  //   >
  //     Welcome
  //   </NavLink>
  //   <NavLink
  //     to="/portfolio"
  //     className="nav__link"
  //     activeClassName="nav__link--active"
  //     exact
  //   >
  //     <i className="fas fa-folder-open" />
  //     <span>Project Portfolio</span>
  //   </NavLink>
  //   <NavLink
  //     to="/resume"
  //     className="nav__link"
  //     activeClassName="nav__link--active"
  //     exact
  //   >
  //     <i className="fas fa-file-alt" />
  //     <span>Resume</span>
  //   </NavLink>
  // </nav>
};

export default Nav;
