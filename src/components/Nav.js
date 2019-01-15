import React from "react";
import { NavLink } from "react-router-dom";
import ScrollArea from "react-scrollbar";

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
      className="nav__links__link"
      activeClassName="nav__links__link--active"
      exact
    >
      <span className="nav__links__link__content">
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
    return (
      <ScrollArea
        speed={0.8}
        className="nav"
        contentClassName="nav__links"
        vertical={false}
      >
        {renderTabs(this.props)}
      </ScrollArea>
    );
  }
}

export default Nav;
