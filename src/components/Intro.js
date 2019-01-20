import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";

import Code from "./widgets/Code";

class Intro extends React.Component {
  renderSpring = () => {
    if (window.innerWidth < 1024) {
      return (
        <Spring
          from={{ opacity: 0, bottom: -50 }}
          to={{ opacity: 1, bottom: 0 }}
          config={{ delay: 800 }}
        >
          {this.renderContent()}
        </Spring>
      );
    } else {
      return (
        <Spring
          from={{ opacity: 0, left: 50 }}
          to={{ opacity: 1, left: 0 }}
          config={{ delay: 800 }}
        >
          {this.renderContent()}
        </Spring>
      );
    }
  };

  renderContent = () => {
    return props => (
      <div style={props} className="intro__content">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000 }}
        >
          {props => <div className="intro__content__img" />}
        </Spring>
        <div className="intro__content__desc">
          <h1>
            Hi!
            <br />
            I'm Patrick,
            <br />A web developer
          </h1>
          <div className="intro__content__desc__icons">
            <i className="fab fa-react colored" />
            <i className="fab fa-js-square colored" />
            <i className="fab fa-html5 colored" />
            <i className="fab fa-css3-alt colored" />
            <i className="fab fa-node-js colored" />
          </div>
          <Link to="/portfolio" className="link">
            Check out my projects
          </Link>
          <Link to="/resume" className="link">
            View my resume
          </Link>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="intro">
        <Code />
        {this.renderSpring()}
      </div>
    );
  }
}

export default Intro;
