import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";

import Code from "./widgets/Code";

class Intro extends React.Component {
  introRef = React.createRef();
  contentRef = React.createRef();

  componentDidMount() {
    // this.introRef.current.addEventListener("mousemove", e => {
    //   const x = -(window.innerWidth / 2 - e.pageX) / 400 + 20;
    //   const y = (window.innerHeight / 2 - e.pageY) / 160;
    //   this.contentRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    // });
  }

  render() {
    return (
      <div ref={this.introRef} className="intro">
        <Code />
        <Spring
          from={{ opacity: 0, right: 0 }}
          to={{ opacity: 1, right: 30 }}
          config={{ delay: 500 }}
        >
          {props => (
            <div style={props} ref={this.contentRef} className="intro__content">
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 500 }}
              >
                {props => <div className="intro__content__img" />}
              </Spring>
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
          )}
        </Spring>
      </div>
    );
  }
}

export default Intro;
