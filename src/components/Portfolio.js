import React from "react";

import Card from "./Card";
import Divider from "./widgets/Divider";

const Portfolio = props => {
  return (
    <div className="portfolio">
      <div className="section">
        <div className="section__header">
          <h1>Projects I participated in</h1>
        </div>
        <div className="section__content">
          <Card
            header={
              <h2>
                Purdue University Center for Career Opportunity V4 website
              </h2>
            }
            content={<div className="img" />}
            footer={<a href="/">Production site</a>}
          />
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
            content={<div className="img" />}
            footer={<a href="/">Github</a>}
          />
          <Card
            header={<h2>Chart App</h2>}
            content={<div className="img" />}
            footer={<a href="/">Github</a>}
          />
          <Card
            header={<h2>Guess The Phrase!</h2>}
            content={<div className="img" />}
            footer={<a href="/">Github</a>}
          />
          <Card
            header={<h2>An Interactive Photo Gallery</h2>}
            content={<div className="img" />}
            footer={<a href="/">Github</a>}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
