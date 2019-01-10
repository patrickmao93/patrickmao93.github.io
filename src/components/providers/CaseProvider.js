import React from "react";

import CaseContext from "../contexts/CaseContext";

import employeeDirectoryPNG from "../../media/employee-directory.png";
import chartPNG from "../../media/chart.png";
import guessThePhrasePNG from "../../media/game.png";
import galleryPNG from "../../media/gallery.png";
import ccoPNG from "../../media/cco.png";

class CaseProvider extends React.Component {
  state = {
    CCO: {
      header: "Purdue University - Center for Career Opportunities Website V4",
      imgUrl: ccoPNG,
      tabInfo: {
        name: "PurdueCCO Site",
        to: "/portfolio/CCO",
        icon: "",
        closable: true
      }
    },
    employeeDirectory: {
      header: "Employee Directory",
      imgUrl: employeeDirectoryPNG,
      tabInfo: {
        name: "Employee Directory",
        to: "/portfolio/employee-directory",
        icon: "",
        closable: true
      }
    },
    chartApp: {
      header: "Chart App",
      imgUrl: chartPNG,
      tabInfo: {
        name: "Chart App",
        to: "/portfolio/chart-app",
        icon: "",
        closable: true
      }
    },
    guessThePhrase: {
      header: "Guess The Phrase!",
      imgUrl: guessThePhrasePNG,
      tabInfo: {
        name: "Guess The Phrase!",
        to: "/portfolio/guess-the-phrase",
        icon: "",
        closable: true
      }
    },
    photoGallery: {
      header: "A Responsive Photo Gallery",
      imgUrl: galleryPNG,
      tabInfo: {
        name: "A Reponsive Photo Gallery",
        to: "/portfolio/a-responsive-photo-gallery",
        icon: "",
        closable: true
      }
    }
  };

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
