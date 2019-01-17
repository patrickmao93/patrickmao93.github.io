import React from "react";
import { Spring } from "react-spring";

import CCO from "./static/CCO";
import EmployeeDirectory from "./static/EmployeeDirectory";
import ChartApp from "./static/ChartApp";
import GuessThePhrase from "./static/GuessThePhrase";
import Gallery from "./static/Gallery";

class Case extends React.Component {
  renderContent = () => {
    switch (this.props.match.params.name) {
      case "cco":
        return <CCO />;
      case "employee-directory":
        return <EmployeeDirectory />;
      case "chart-app":
        return <ChartApp />;
      case "guess-the-phrase":
        return <GuessThePhrase />;
      case "a-responsive-photo-gallery":
        return <Gallery />;

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
