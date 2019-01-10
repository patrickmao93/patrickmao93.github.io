import React from "react";

import CCO from "./static/CCO";
import EmployeeDirectory from "./static/EmployeeDirectory";
import ChartApp from "./static/ChartApp";
import GuessThePhrase from "./static/GuessThePhrase";
import Gallery from "./static/Gallery";

class Case extends React.Component {
  componentDidMount() {}

  render() {
    const { params } = this.props.match;
    switch (params.name) {
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
  }
}

export default Case;
