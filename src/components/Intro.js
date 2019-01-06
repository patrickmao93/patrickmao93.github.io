import React from "react";

const Intro = props => {
  return (
    <div className="intro">
      <div className="intro__content">
        <div className="intro__content__img" />
        <h1>Hi!</h1>
        <h1>I'm Patrick,</h1>
        <h1>A web developer</h1>
      </div>
      <div className="snow snow--near" />
      <div className="snow snow--near snow--alt" />

      <div className="snow snow--mid" />
      <div className="snow snow--mid snow--alt" />

      <div className="snow snow--far" />
      <div className="snow snow--far snow--alt" />
    </div>
  );
};

export default Intro;
