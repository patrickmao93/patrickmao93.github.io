import React from "react";
import zhihuIcon from "../icons/zhihu.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a className="sidebar__icon" href="https://github.com/patrickmao93">
        <i className="fab fa-github" />
      </a>
      <a className="sidebar__icon" href="/">
        <i className="fab fa-linkedin-in" />
      </a>
      <a className="sidebar__icon" href="/">
        <img src={zhihuIcon} alt="zhihu" />
      </a>
      <a className="sidebar__icon sidebar__setting" href="/">
        <i className="fas fa-cog" />
      </a>
    </div>
  );
};

export default Sidebar;
