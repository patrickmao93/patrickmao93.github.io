import React from "react";

import Pill from "./../widgets/Pill";
import Card from "./../widgets/Card";
import Anchor from "./../widgets/Anchor";

import lg from "../../media/images/proj7_1440x800.jpg";
import md from "../../media/images/proj7_768x800.jpg";
import sm from "../../media/images/proj7_425x800.jpg";

const ChartApp = () => {
  return (
    <div>
      <div className="case__header">
        <div className="case__header__background case__header__background--chart" />
        <h1>Dashboard App</h1>
        <div className="case__header__info">
          <div className="case__header__info__pills">
            <Pill type="js" />
            <Pill type="chartjs" />
          </div>
          <div className="case__header__info__links">
            <Anchor href="https://github.com/patrickmao93/techdegree-project-7">
              <i className="fab fa-github" />
              View on Github
            </Anchor>
            <Anchor href="https://patrickmao93.github.io/techdegree-project-7">
              <i className="far fa-window-maximize" />
              Go to live page
            </Anchor>
          </div>
        </div>
      </div>
      <div className="case__content">
        <section>
          <h2>Summary</h2>
          <p className="case__content__paragraph">
            This was the project #7 of the{" "}
            <Anchor href="https://teamtreehouse.com/techdegree/front-end-web-development">
              Treehouse Front End Web Development Techdegree
            </Anchor>
            . <br />
            CSS Grid is just awesomeness. What even better is when combining CSS
            Grid with flexbox. These two tools really makes laying out web apps
            a breeze. Grid is incredibly versatile when it comes to 2D layouts,
            but sometimes I find it to be tedious when a container just contains
            several elements in one direction, and this is where flexbox comes
            in handy! In this project, you will see the combined power of CSS
            Grid and Flexbox, resulting in fully responsive page layouts.
          </p>
        </section>
        <section>
          <h2>My Learnings</h2>
          <ul className="case__content__list">
            <li>CSS Grid layout</li>
            <li>Using SVG graphics</li>
            <li>Chart.js for Interactive Charts</li>
            <li>Local Storage</li>
            <li>Responsive web design</li>
          </ul>
        </section>
        <section>
          <h2>Screenshots</h2>
          <div className="case__content__cards">
            <Card imgUrl={sm} />
            <Card imgUrl={md} />
            <Card imgUrl={lg} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChartApp;
