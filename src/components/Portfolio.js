import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import Divider from "./widgets/Divider";
import employeeDirectoryPNG from "../media/employee-directory.png";
import chartPNG from "../media/chart.png";
import gamePNG from "../media/game.png";
import galleryPNG from "../media/gallery.png";
import ccoPNG from "../media/cco.png";

const Portfolio = props => {
  return (
    <div className="portfolio">
      <div className="section">
        <div className="section__header">
          <h1>Projects I participated in</h1>
        </div>
        <div className="section__content">
          <Link
            to="/portfolio/CCO"
            onClick={() => props.onClickCase("/portfolio/CCO")}
          >
            <Card
              header={
                <h2>
                  Purdue University Center for Career Opportunity V4 website
                </h2>
              }
              content={
                <div className="img">
                  <img src={ccoPNG} alt="Purdue CCO Site" />
                </div>
              }
              footer={<span>Production site</span>}
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
          <Card
            header={<h2>Employee Directory</h2>}
            content={
              <div className="img">
                <img src={employeeDirectoryPNG} alt="employee directory" />
              </div>
            }
            footer={<a href="/">Github</a>}
          />
          <Card
            header={<h2>Chart App</h2>}
            content={
              <div className="img">
                <img src={chartPNG} alt="chart app" />
              </div>
            }
            footer={<a href="/">Github</a>}
          />
          <Card
            header={<h2>Guess The Phrase!</h2>}
            content={
              <div className="img">
                <img src={gamePNG} alt="Guess the Phrase!" />
              </div>
            }
            footer={<a href="/">Github</a>}
          />
          <Card
            header={<h2>An Interactive Photo Gallery</h2>}
            content={
              <div className="img">
                <img src={galleryPNG} alt="Gallery" />
              </div>
            }
            footer={<a href="/">Github</a>}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
