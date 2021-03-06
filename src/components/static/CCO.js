import React from "react";

import Pill from "./../widgets/Pill";
import Card from "../widgets/Card";
import Anchor from "./../widgets/Anchor";

import lg from "../../media/images/cco_1440x800.jpg";
import md from "../../media/images/cco_768x800.jpg";
import sm from "../../media/images/cco_425x800.jpg";

const CCO = () => {
  return (
    <div>
      <div className="case__header">
        <div className="case__header__background case__header__background--purdue" />
        <h1>Purdue University CCO Website V4</h1>
        <div className="case__header__info">
          <div className="case__header__info__pills">
            <Pill type="js" />
            <Pill type="jquery" />
            <Pill type="bootstrap" />
            <Pill type="knockout" />
            <Pill type="asp" />
            <Pill type="mysql" />
          </div>
          <div className="case__header__info__links">
            <Anchor href="https://www.cco.purdue.edu/">
              <i className="far fa-window-maximize" />
              Live website
            </Anchor>
          </div>
        </div>
      </div>
      <div className="case__content">
        <section>
          <h2>Summary</h2>
          <p>
            This was the project I participated in during my summer internship
            at Purdue Univercity's CCO (Center for Career Opportunities)
            department. The dev team is fairly small (less than ten people), and
            is consisted of students range from undergrads to PHDs. I worked as
            a full-stack developer focusing on: 1. Delivering front-end user
            interface for both general users of the site and the Purdue
            employees that create the content. 2. Writing/testing back-end APIs
            and designing database schemas.
          </p>
          <p>
            With the lead of our dev lead and PM, we designed and deployed the
            CMS from ground up, allowing Purdue employees to create, and manage
            content through their employee portal. During the development of the
            CMS, we held meetings on a weekly basis to communicate feedback and
            suggestions with our client (Purdue CCO employee).
          </p>
        </section>
        <section>
          <h2>Screenshots</h2>
          <div className="case__content__cards">
            <Card imgUrl={sm} />
            <Card imgUrl={md} />
            <Card imgUrl={lg} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CCO;
