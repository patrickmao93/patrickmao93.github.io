import React from "react";
import { Link } from "react-router-dom";

import CaseContext from "./contexts/CaseContext";

import Card from "./Card";
import Divider from "./widgets/Divider";

const Portfolio = props => {
  return (
    <div className="portfolio">
      <CaseContext.Consumer>
        {({ state }) => {
          return (
            <div>
              <div className="section">
                <div className="section__header">
                  <h1>Projects I participated in</h1>
                </div>
                <div className="section__content">
                  <Link
                    to={state.CCO.tabInfo.to}
                    onClick={() => props.onClickCase(state.CCO.tabInfo)}
                  >
                    <Card header={state.CCO.header} imgUrl={state.CCO.imgUrl} />
                  </Link>
                </div>
              </div>
              <Divider />
              <div className="section">
                <div className="section__header">
                  <h1>
                    Projects I did throughout the courses from{" "}
                    <a href="/">Treehouse</a>
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
                    />
                  </Link>

                  <Link
                    to={state.chartApp.tabInfo.to}
                    onClick={() => props.onClickCase(state.chartApp.tabInfo)}
                  >
                    <Card
                      header={state.chartApp.header}
                      imgUrl={state.chartApp.imgUrl}
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
