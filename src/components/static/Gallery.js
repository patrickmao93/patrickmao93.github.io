import React from "react";

import Pill from "./../widgets/Pill";
import Card from "../Card";

import sm from "../../media/gallery/phone.jpg";
import md from "../../media/gallery/tablet.jpg";
import lg from "../../media/gallery/desktop.jpg";
import lightbox from "../../media/gallery/lightbox.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="case__header">
        <h1>A Responsive Photo Gallery</h1>
        <div className="case__header__info">
          <div className="case__header__info__pills">
            <Pill type="js" />
            <Pill type="jquery" />
          </div>
          <div className="case__header__info__links">
            <a href="https://github.com/patrickmao93/techdegree-project-5">
              <i className="fab fa-github" />
              View on Github
            </a>
            <a href="https://patrickmao93.github.io/techdegree-project-5">
              <i className="far fa-window-maximize" />
              Go to live page
            </a>
          </div>
        </div>
      </div>
      <div className="case__content">
        <h2>Summary</h2>
        <p className="case__content__paragraph">
          This was the project #5 of the{" "}
          <a href="https://teamtreehouse.com/techdegree/front-end-web-development">
            Treehouse Front End Web Development Techdegree
          </a>
          . <br />
          Mobile experience is not in scope of this project, so please view the
          page at desktop width. No library was used in this project. At this
          point I am already very comfortable with utilizing jQuery and it's
          plugins. Vanilla js always looks terrifying to me, but thanks to the
          awesome javascript teacher Guil at Treehouse, I got a grasp on vanilla
          js quickly. This game is written entirely in vanilla js for the sake
          of practicing. I also digged into css animation a little bit in this
          project, and found it incredibly fun!
        </p>

        <h2>My Learnings</h2>
        <ul className="case__content__list">
          <li>DOM Scripting</li>
          <li>CSS3 Aniation</li>
        </ul>
        <h2>Screenshots</h2>
        <Card header="Small" imgUrl={sm} />
        <Card header="Medium" imgUrl={md} />
        <Card header="Large" imgUrl={lg} />
        <Card header="Lightbox" imgUrl={lightbox} />
      </div>
    </div>
  );
};

export default Gallery;
