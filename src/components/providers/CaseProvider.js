import React from "react";

import CaseContext from "../contexts/CaseContext";

import employeeDirectoryjpg from "../../media/employee-directory/lg.jpg";
import chartjpg from "../../media/chart-app/desktop.jpg";
import guessThePhrasejpg from "../../media/guess-the-phrase/game.jpg";
import galleryjpg from "../../media/gallery/desktop.jpg";
import ccojpg from "../../media/cco/cco.jpg";

class CaseProvider extends React.Component {
  state = {
    CCO: {
      header: "Purdue University - Center for Career Opportunities Website V4",
      imgUrl: ccojpg,
      tabInfo: {
        name: "PurdueCCO Site",
        to: "/portfolio/cco",
        icon: "",
        closable: true
      }
    },
    employeeDirectory: {
      header: "Employee Directory",
      imgUrl: employeeDirectoryjpg,
      tabInfo: {
        name: "Employee Directory",
        to: "/portfolio/employee-directory",
        icon: "",
        closable: true
      }
    },
    chartApp: {
      header: "Dashboard App",
      imgUrl: chartjpg,
      tabInfo: {
        name: "Chart App",
        to: "/portfolio/chart-app",
        icon: "",
        closable: true
      }
    },
    guessThePhrase: {
      header: "Guess The Phrase!",
      imgUrl: guessThePhrasejpg,
      tabInfo: {
        name: "Guess The Phrase!",
        to: "/portfolio/guess-the-phrase",
        icon: "",
        closable: true
      }
    },
    photoGallery: {
      header: "A Responsive Photo Gallery",
      imgUrl: galleryjpg,
      tabInfo: {
        name: "A Reponsive Photo Gallery",
        to: "/portfolio/a-responsive-photo-gallery",
        icon: "",
        closable: true
      }
    }
  };

  componentDidMount() {
    //preload all images when provider mounts
    for (const page in this.state) {
      const img = new Image();
      img.src = this.state[page].imgUrl;
    }
  }

  render() {
    return (
      <CaseContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </CaseContext.Provider>
    );
  }
}

export default CaseProvider;
