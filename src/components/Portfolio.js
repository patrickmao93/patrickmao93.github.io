import React from "react";
import { Link } from "react-router-dom";

import CaseContext from "./contexts/CaseContext";

import Card from "./widgets/Card";

const Portfolio = props => {
  return (
    <div className="portfolio">
      <CaseContext.Consumer>
        {({ state }) => {
          return (
            <>
              <Link
                to={state.CCO.tabInfo.to}
                className="link-card"
                onClick={() => props.onClickCase(state.CCO.tabInfo)}
              >
                <Card
                  header={state.CCO.header}
                  imgUrl={state.CCO.imgUrl}
                  type="Production"
                  interactable={true}
                  pills={[
                    "js",
                    "jquery",
                    "bootstrap",
                    "backbone",
                    "asp",
                    "mysql"
                  ]}
                />
              </Link>

              <Link
                to={state.employeeDirectory.tabInfo.to}
                className="link-card"
                onClick={() =>
                  props.onClickCase(state.employeeDirectory.tabInfo)
                }
              >
                <Card
                  header={state.employeeDirectory.header}
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
                  imgUrl={state.photoGallery.imgUrl}
                  interactable={true}
                  type="Personal"
                  pills={["js", "jquery"]}
                />
              </Link>
            </>
          );
        }}
      </CaseContext.Consumer>
    </div>
  );
};

export default Portfolio;
