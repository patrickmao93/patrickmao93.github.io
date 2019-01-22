import React from "react";

import Pill from "../widgets/Pill";
import Card from "../widgets/Card";
import Anchor from "./../widgets/Anchor";

import sm from "../../media/images/portfolio_425x800.jpg";
import md from "../../media/images/portfolio_768x800.jpg";
import xl from "../../media/images/portfolio_1440x800.jpg";

const PorfolioSite = () => {
  return (
    <div>
      <div className="case__header">
        <div className="case__header__background case__header__background--portfolio" />
        <h1>The Portfolio Site!</h1>
        <div className="case__header__info">
          <div className="case__header__info__pills">
            <Pill type="react" />
            <Pill type="js" />
            <Pill type="sass" />
          </div>
          <div className="case__header__info__links">
            <Anchor href="https://github.com/patrickmao93/patrickmao93.github.io">
              <i className="fab fa-github" />
              View on Github
            </Anchor>
          </div>
        </div>
      </div>
      <div className="case__content">
        <section>
          <h2>Summary</h2>
          <p className="case__content__paragraph">
            For this project, I needed to unleash eveything I have ranging from
            UI/UX design, project management, to the actual development and
            deployment. <br />
            This site was heavily inspired by the visual elements of a code
            editor like VSCode. You can open tabs inside this app and close
            them! I also mixed a bit of material design principles into it.{" "}
            <br />
            The new React Context system is used in this site to handle data.
            Though Context system is not a direct substitution for Redux, I
            found that Redux is too messy for small scale projects like this. So
            I just went with Context.
          </p>
        </section>
        <section>
          <h2>Screenshots</h2>
          <div className="case__content__cards">
            <Card imgUrl={sm} />
            <Card imgUrl={md} />
            <Card imgUrl={xl} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PorfolioSite;
