import React from "react";

import Pill from "./../widgets/Pill";
import Card from "../widgets/Card";
import Anchor from "../widgets/Anchor";

import lg from "../../media/images/proj8_1440x800.jpg";
import md from "../../media/images/proj8_1024x800.jpg";
import sm from "../../media/images/proj8_425x800.jpg";
import modal from "../../media/images/proj8_1440x800_1.jpg";
import loading from "../../media/images/proj8_1024x800_2.jpg";

const EmployeeDirectory = () => {
  return (
    <div>
      <div className="case__header">
        <div className="case__header__background case__header__background--ed" />
        <h1>Employee Directory App</h1>
        <div className="case__header__info">
          <div className="case__header__info__pills">
            <Pill type="react" />
            <Pill type="redux" />
            <Pill type="js" />
            <Pill type="sass" />
          </div>
          <div className="case__header__info__links">
            <Anchor href="https://github.com/patrickmao93/techdegree-project-8">
              <i className="fab fa-github" />
              View on Github
            </Anchor>
            <Anchor href="https://patrickmao93.github.io/EmployeeDirectory-React">
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
            This was the project #8 of the{" "}
            <Anchor href="https://teamtreehouse.com/techdegree/front-end-web-development">
              Treehouse Front End Web Development Techdegree
            </Anchor>
            . <br />
            The purpose of this project is to help myself practicing the concept
            of utilizing the <em>fetch</em> API to pull data from an online API
            asynchronously. It also helped me understand <em>Promise</em>.{" "}
            <br />
            What this project really showed/taught me was how easily front end
            code can get messy and hard to maintain when it comes to data
            handling without a framework. I already see myself creating several
            global variables that could end up being hazardous in the future if
            the project scale grows. <br />
            After finishing this project, I re-wrote it completely with React.{" "}
            <Anchor href="https://github.com/patrickmao93/EmployeeDirectory-React">
              Check it out
            </Anchor>
            . <br />
            After doing a react version of this project, I took one step further
            and implemented this project again using react and redux.{" "}
            <Anchor href="https://github.com/patrickmao93/Employee-directory-with-redux">
              Check it out
            </Anchor>
          </p>
        </section>
        <section>
          <h2>Screenshots</h2>
          <div className="case__content__cards">
            <Card imgUrl={sm} />
            <Card imgUrl={md} />
            <Card imgUrl={lg} />
            <Card imgUrl={modal} />
            <Card imgUrl={loading} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
