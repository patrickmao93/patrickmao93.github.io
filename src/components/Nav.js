import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className="nav__link"
        activeClassName="nav__link--active"
        exact
      >
        Welcome
      </NavLink>
      <NavLink
        to="/portfolio"
        className="nav__link"
        activeClassName="nav__link--active"
        exact
      >
        <i className="fas fa-folder-open" />
        <span>Project Portfolio</span>
      </NavLink>
      <NavLink
        to="/resume"
        className="nav__link"
        activeClassName="nav__link--active"
        exact
      >
        <i className="fas fa-file-alt" />
        <span>Resume</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
