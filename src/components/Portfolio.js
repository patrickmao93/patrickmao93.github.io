import React from "react";
import { Link } from "react-router-dom";

import CaseContext from "./contexts/CaseContext";

import Card from "./widgets/Card";

const Portfolio = props => {
  return (
    <CaseContext.Consumer>
      {({ state }) => {
        return (
          <div className="portfolio">
            <Link
              to={state.portfolio.tabInfo.to}
              className="link-card"
              onClick={() => props.onClickCase(state.portfolio.tabInfo)}
            >
              <Card
                header={state.portfolio.header}
                sub={state.portfolio.sub}
                imgUrl={state.portfolio.imgUrl}
                type="Production"
                interactable={true}
                pills={["react", "js", "sass"]}
              />
            </Link>
            <Link
              to={state.CCO.tabInfo.to}
              className="link-card"
              onClick={() => props.onClickCase(state.CCO.tabInfo)}
            >
              <Card
                header={state.CCO.header}
                sub={state.CCO.sub}
                imgUrl={state.CCO.imgUrl}
                type="Production"
                interactable={true}
                pills={[
                  "js",
                  "jquery",
                  "bootstrap",
                  "knockout",
                  "asp",
                  "mysql"
                ]}
              />
            </Link>

            <Link
              to={state.employeeDirectory.tabInfo.to}
              className="link-card"
              onClick={() => props.onClickCase(state.employeeDirectory.tabInfo)}
            >
              <Card
                header={state.employeeDirectory.header}
                sub={state.employeeDirectory.sub}
                imgUrl={state.employeeDirectory.imgUrl}
                interactable={true}
                type="Personal"
                pills={["react", "redux", "js", "sass"]}
              />
            </Link>

            <Link
              to={state.chartApp.tabInfo.to}
              className="link-card"
              onClick={() => props.onClickCase(state.chartApp.tabInfo)}
            >
              <Card
                header={state.chartApp.header}
                sub={state.chartApp.sub}
                imgUrl={state.chartApp.imgUrl}
                interactable={true}
                type="Personal"
                pills={["js", "sass", "chartjs"]}
              />
            </Link>

            <Link
              to={state.guessThePhrase.tabInfo.to}
              className="link-card"
              onClick={() => props.onClickCase(state.guessThePhrase.tabInfo)}
            >
              <Card
                header={state.guessThePhrase.header}
                sub={state.guessThePhrase.sub}
                imgUrl={state.guessThePhrase.imgUrl}
                interactable={true}
                type="Personal"
                pills={["js"]}
              />
            </Link>

            <Link
              to={state.photoGallery.tabInfo.to}
              className="link-card"
              onClick={() => props.onClickCase(state.photoGallery.tabInfo)}
            >
              <Card
                header={state.photoGallery.header}
                sub={state.photoGallery.sub}
                imgUrl={state.photoGallery.imgUrl}
                interactable={true}
                type="Personal"
                pills={["js", "jquery"]}
              />
            </Link>
          </div>
        );
      }}
    </CaseContext.Consumer>
  );
};

export default Portfolio;
