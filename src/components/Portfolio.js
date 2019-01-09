import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import Divider from "./widgets/Divider";
import employeeDirectoryPNG from "../media/employee-directory.png";
import chartPNG from "../media/chart.png";
import guessThePhrasePNG from "../media/game.png";
import galleryPNG from "../media/gallery.png";
import ccoPNG from "../media/cco.png";

const portfolioCases = {
  CCO: {
    header: "Purdue University Center for Career Opportunity V4 website",
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

const Portfolio = props => {
  return (
    <div className="portfolio">
      <div className="section">
        <div className="section__header">
          <h1>Projects I participated in</h1>
        </div>
        <div className="section__content">
          <Link
            to={portfolioCases.CCO.tabInfo.to}
            onClick={() => props.onClickCase(portfolioCases.CCO.tabInfo)}
          >
            <Card
              header={portfolioCases.CCO.header}
              imgUrl={portfolioCases.CCO.imgUrl}
            />
          </Link>
        </div>
      </div>
      <Divider />
      <div className="section">
        <div className="section__header">
          <h1>
            Projects I did throughout the courses from <a href="/">Treehouse</a>
          </h1>
        </div>
        <div className="section__content">
          <Link
            to={portfolioCases.employeeDirectory.tabInfo.to}
            onClick={() =>
              props.onClickCase(portfolioCases.employeeDirectory.tabInfo)
            }
          >
            <Card
              header={portfolioCases.employeeDirectory.header}
              imgUrl={portfolioCases.employeeDirectory.imgUrl}
            />
          </Link>

          <Link
            to={portfolioCases.chartApp.tabInfo.to}
            onClick={() => props.onClickCase(portfolioCases.chartApp.tabInfo)}
          >
            <Card
              header={portfolioCases.chartApp.header}
              imgUrl={portfolioCases.chartApp.imgUrl}
            />
          </Link>

          <Link
            to={portfolioCases.guessThePhrase.tabInfo.to}
            onClick={() =>
              props.onClickCase(portfolioCases.guessThePhrase.tabInfo)
            }
          >
            <Card
              header={portfolioCases.guessThePhrase.header}
              imgUrl={portfolioCases.guessThePhrase.imgUrl}
            />
          </Link>

          <Link
            to={portfolioCases.photoGallery.tabInfo.to}
            onClick={() =>
              props.onClickCase(portfolioCases.photoGallery.tabInfo)
            }
          >
            <Card
              header={portfolioCases.photoGallery.header}
              imgUrl={portfolioCases.photoGallery.imgUrl}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
