import React from "react";

import SocialMediaContext from "../contexts/SocialMediaContext";

import zhihuIcon from "../../icons/zhihu.svg";
import codewarsIcon from "../../icons/codewars.svg";
import wechatQR from "../../media/images/QR//wechat.jpg";

class SocialMediaProvider extends React.Component {
  state = {
    github: {
      getTooltip: function() {
        return "Github";
      },
      url: "https://github.com/patrickmao93",
      getIcon: function() {
        return <i className="fab fa-github" />;
      }
    },
    linkedin: {
      getTooltip: function() {
        return "LinkedIn";
      },
      url: "https://www.linkedin.com/in/qizheng-mao/",
      getIcon: function() {
        return <i className="fab fa-linkedin-in" />;
      }
    },
    zhihu: {
      getTooltip: function() {
        return "Zhihu";
      },
      url: "https://www.zhihu.com/people/padoriku/activities",
      getIcon: function() {
        return <img src={zhihuIcon} alt="zhihu" />;
      }
    },
    codewars: {
      getTooltip: function() {
        return "Codewars";
      },
      url: "https://www.codewars.com/users/patrickmao",
      getIcon: function() {
        return <img src={codewarsIcon} alt="codewars" width="24" height="24" />;
      }
    },
    wechat: {
      getTooltip: function() {
        return <img src={wechatQR} alt="wechat" />;
      },
      url: "",
      getIcon: function() {
        return <i className="fab fa-weixin" />;
      }
    }
  };
  render() {
    return (
      <SocialMediaContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </SocialMediaContext.Provider>
    );
  }
}

export default SocialMediaProvider;
