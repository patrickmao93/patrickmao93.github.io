import React from "react";
import { Link } from "react-router-dom";

import CaseContext from "./contexts/CaseContext";

import Card from "./Card";

const Portfolio = props => {
  return (
    <div className="portfolio">
      <CaseContext.Consumer>
        {({ state }) => {
          return (
            <div>
              <div className="section">
                <div className="section__header">
                  <h1>Production Projects</h1>
                </div>
                <div className="section__content">
                  <Link
                    to={state.CCO.tabInfo.to}
                    onClick={() => props.onClickCase(state.CCO.tabInfo)}
                  >
                    <Card
                      header={state.CCO.header}
                      imgUrl={state.CCO.imgUrl}
                      pills={["js", "sass", "bootstrap", "backbone", "asp"]}
                    />
                  </Link>
                </div>
              </div>
              <div className="section">
                <div className="section__header">
                  <h1>
                    Projects from online bootcamp{" "}
                    <a href="https://teamtreehouse.com/techdegree/front-end-web-development">
                      Treehouse
                    </a>
                  </h1>
                </div>
                <div className="section__content">
                  <Link
                    to={state.employeeDirectory.tabInfo.to}
                    onClick={() =>
                      props.onClickCase(state.employeeDirectory.tabInfo)
                    }
                  >
                    <Card
                      header={state.employeeDirectory.header}
                      imgUrl={state.employeeDirectory.imgUrl}
                      pills={["react", "redux", "js", "sass"]}
                    />
                  </Link>

                  <Link
                    to={state.chartApp.tabInfo.to}
                    onClick={() => props.onClickCase(state.chartApp.tabInfo)}
                  >
                    <Card
                      header={state.chartApp.header}
                      imgUrl={state.chartApp.imgUrl}
                      pills={["js", "sass", "chartjs"]}
                    />
                  </Link>

                  <Link
                    to={state.guessThePhrase.tabInfo.to}
                    onClick={() =>
                      props.onClickCase(state.guessThePhrase.tabInfo)
                    }
                  >
                    <Card
                      header={state.guessThePhrase.header}
                      imgUrl={state.guessThePhrase.imgUrl}
                      pills={["js"]}
                    />
                  </Link>

                  <Link
                    to={state.photoGallery.tabInfo.to}
                    onClick={() =>
                      props.onClickCase(state.photoGallery.tabInfo)
                    }
                  >
                    <Card
                      header={state.photoGallery.header}
                      imgUrl={state.photoGallery.imgUrl}
                      pills={["js"]}
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </CaseContext.Consumer>
    </div>
  );
};

export default Portfolio;
