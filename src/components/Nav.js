import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <a className="nav__link nav__link--active" href="/">
        About Me
      </a>
      <a className="nav__link" href="/">
        Project Portfolio
      </a>
      <a className="nav__link" href="/">
        Developer Blog
      </a>
    </nav>
  );
};

export default Nav;
