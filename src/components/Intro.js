import React from "react";
import { Link } from "react-router-dom";

const Intro = props => {
  return (
    <div className="intro">
      <div className="intro__content">
        <div className="intro__content__img" />
        <div className="intro__content__desc">
          <h1>Hi!</h1>
          <h1>I'm Patrick,</h1>
          <h1>A web developer</h1>
          <Link to="/portfolio" className="link">
            Project Portfolio
          </Link>
          <Link to="/resume" className="link">
            View My Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
