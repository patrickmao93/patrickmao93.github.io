import React from "react";
import { Spring } from "react-spring";

import CCO from "./static/CCO";
import Kanban from "./static/Kanban";
import ChartApp from "./static/ChartApp";
import GuessThePhrase from "./static/GuessThePhrase";
import PortfolioSite from "./static/PortfolioSite";
import EmployeeDirectory from "./static/EmployeeDirectory";

class Case extends React.Component {
  renderContent = () => {
    switch (this.props.match.params.name) {
      case "cco":
        return <CCO />;
      case "ultimate-kanban":
        return <Kanban />;
      case "chart-app":
        return <ChartApp />;
      case "guess-the-phrase":
        return <GuessThePhrase />;
      case "portfolio-site":
        return <PortfolioSite />;
      case "employee-directory":
        return <EmployeeDirectory />;

      default:
        return;
    }
  };

  render() {
    return (
      <Spring
        from={{ opacity: 0, top: "80px" }}
        to={{ opacity: 1, top: "40px" }}
      >
        {props => (
          <div className="case" style={props}>
            {this.renderContent()}
          </div>
        )}
      </Spring>
    );
  }
}

export default Case;
