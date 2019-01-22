import React from "react";
import ReactTooltip from "react-tooltip";

import SocialMediaContext from "./contexts/SocialMediaContext";
import Anchor from "./widgets/Anchor";

const renderIcons = state => {
  const socialIcons = [];
  for (let iconName in state) {
    socialIcons.push(
      <Anchor
        key={iconName}
        custom={{
          className: "sidebar__icon",
          href: state[iconName].url,
          "data-tip": "",
          "data-for": `${iconName}-tooltip`
        }}
      >
        <ReactTooltip id={`${iconName}-tooltip`} effect="solid">
          <span>{state[iconName].getTooltip()}</span>
        </ReactTooltip>
        {state[iconName].getIcon()}
      </Anchor>
    );
  }
  return socialIcons;
};

const Sidebar = () => {
  return (
    <SocialMediaContext.Consumer>
      {({ state }) => {
        return <div className="sidebar">{renderIcons(state)}</div>;
      }}
    </SocialMediaContext.Consumer>
  );
};

export default Sidebar;
