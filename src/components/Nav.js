import React from "react";
import { NavLink } from "react-router-dom";

const renderCloseIcon = (tab, onClickClose) => {
  if (tab.closable) {
    return (
      <i
        onClick={e => {
          e.preventDefault();
          onClickClose(tab);
        }}
        className="fas fa-times"
      />
    );
  }
};

const renderTabs = ({ tabs, onClickClose }) => {
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
          {tab.name} {renderCloseIcon(tab, onClickClose)}
        </span>
      </span>
    </NavLink>
  ));
};

class Nav extends React.Component {
  render() {
    return <nav className="nav">{renderTabs(this.props)}</nav>;
  }
}

export default Nav;
