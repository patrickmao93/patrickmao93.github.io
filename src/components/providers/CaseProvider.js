import React from "react";

import CaseContext from "../contexts/CaseContext";

import employeeDirectoryjpg from "../../media/images/thumbnails/proj8_576x320.jpg";
import chartjpg from "../../media/images/thumbnails/proj7_576x320.jpg";
import guessThePhrasejpg from "../../media/images/thumbnails/proj6_576x320.jpg";
import galleryjpg from "../../media/images/thumbnails/proj5_576x320.jpg";
import ccojpg from "../../media/images/thumbnails/cco_576x320.jpg";
import portfoliojpg from "../../media/images/thumbnails/portfolio_576x320.jpg";
import kanbanjpg from "../../media/images/thumbnails/kanban.jpg";

class CaseProvider extends React.Component {
  state = {
    portfolio: {
      header: "This Porfolio Site!",
      sub: "Personal Project",
      imgUrl: portfoliojpg,
      tabInfo: {
        name: "The Portfolio Site!",
        to: "/portfolio/portfolio-site",
        icon: "fas fa-folder",
        closable: true
      }
    },
    CCO: {
      header: "Purdue CCO Website",
      sub: "Purdue University",
      imgUrl: ccojpg,
      tabInfo: {
        name: "PurdueCCO Site",
        to: "/portfolio/cco",
        icon: "fas fa-folder",
        closable: true
      }
    },
    employeeDirectory: {
      header: "Employee Directory",
      sub: "Treehouse Project",
      imgUrl: employeeDirectoryjpg,
      tabInfo: {
        name: "Employee Directory",
        to: "/portfolio/employee-directory",
        icon: "fas fa-folder",
        closable: true
      }
    },
    chartApp: {
      header: "Dashboard App",
      sub: "Treehouse Project",
      imgUrl: chartjpg,
      tabInfo: {
        name: "Dashboard App",
        to: "/portfolio/chart-app",
        icon: "fas fa-folder",
        closable: true
      }
    },
    guessThePhrase: {
      header: "Guess The Phrase!",
      sub: "Treehouse Project",
      imgUrl: guessThePhrasejpg,
      tabInfo: {
        name: "Guess The Phrase!",
        to: "/portfolio/guess-the-phrase",
        icon: "fas fa-folder",
        closable: true
      }
    },
    photoGallery: {
      header: "A Responsive Photo Gallery",
      sub: "Treehouse Project",
      imgUrl: galleryjpg,
      tabInfo: {
        name: "A Reponsive Photo Gallery",
        to: "/portfolio/a-responsive-photo-gallery",
        icon: "fas fa-folder",
        closable: true
      }
    },
    ultimateKanban: {
      header: "Ultimate-Kanban",
      sub: "Personal Project",
      imgUrl: kanbanjpg,
      tabInfo: {
        name: "Ultimate-Kanban",
        to: "/portfolio/ultimate-kanban",
        icon: "fas fa-folder",
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
