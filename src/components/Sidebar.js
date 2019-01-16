import React from "react";
import ReactTooltip from "react-tooltip";

import zhihuIcon from "../icons/zhihu.svg";
import codewarsIcon from "../icons/codewars.svg";

import wechatQR from "../media/images/QR//wechat.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a
        className="sidebar__icon"
        href="https://github.com/patrickmao93"
        data-tip
        data-for="github-tooltip"
      >
        <ReactTooltip id="github-tooltip" effect="solid">
          <span>Github</span>
        </ReactTooltip>
        <i className="fab fa-github" />
      </a>

      <a
        className="sidebar__icon"
        href="https://www.linkedin.com/in/qizheng-mao/"
        data-tip
        data-for="linkedin-tooltip"
      >
        <ReactTooltip id="linkedin-tooltip" effect="solid">
          <span>LinkedIn</span>
        </ReactTooltip>
        <i className="fab fa-linkedin-in" />
      </a>

      <a
        className="sidebar__icon"
        href="https://www.zhihu.com/people/padoriku"
        data-tip
        data-for="zhihu-tooltip"
      >
        <ReactTooltip id="zhihu-tooltip" effect="solid">
          <span>Zhihu</span>
        </ReactTooltip>
        <img src={zhihuIcon} alt="zhihu" />
      </a>

      <a
        className="sidebar__icon"
        href="https://www.codewars.com/users/patrickmao"
        data-tip
        data-for="codewars-tooltip"
      >
        <ReactTooltip id="codewars-tooltip" effect="solid">
          <span>Codewars</span>
        </ReactTooltip>
        <img src={codewarsIcon} alt="codewars" width="24" height="24" />
      </a>

      <span
        className="sidebar__icon"
        href="/"
        data-tip
        data-for="wechat-tooltip"
      >
        <ReactTooltip id="wechat-tooltip" effect="solid" place="right">
          <img src={wechatQR} alt="wechat" />
        </ReactTooltip>
        <i className="fab fa-weixin" />
      </span>
    </div>
  );
};

export default Sidebar;
