import React from "react";
import { NavLink } from "react-router-dom";

const renderCloseIcon = tab => {
  if (tab.closable) {
    return <i className="fas fa-times" />;
  }
};

const renderTabs = tabs => {
  return tabs.map(tab => (
    <NavLink
      key={tab.to}
      to={tab.to}
      className="nav__link"
      activeClassName="nav__link--active"
      exact
    >
      <span className="nav__link__content">
        <i className={tab.icon} />
        <span>
          {tab.name} {renderCloseIcon(tab)}
        </span>
      </span>
    </NavLink>
  ));
};

const Nav = props => {
  return <nav className="nav">{renderTabs(props.tabs)}</nav>;
};

export default Nav;
