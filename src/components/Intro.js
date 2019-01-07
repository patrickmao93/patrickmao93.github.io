import React from "react";
import { Link } from "react-router-dom";

import Code from "./widgets/Code";

const Intro = props => {
  return (
    <div className="intro">
      <Code />
      <div className="intro__content">
        <div className="intro__content__img" />
        <div className="intro__content__desc">
          <h1>Hi!</h1>
          <h1>I'm Patrick,</h1>
          <h1>A web developer</h1>
          <Link to="/portfolio" className="link">
            Check out my projects
          </Link>
          <Link to="/resume" className="link">
            View my resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
