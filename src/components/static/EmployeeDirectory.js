import React from "react";

import Pill from "./../widgets/Pill";
import Card from "../Card";

import sm from "../../media/employee-directory/sm.png";
import md from "../../media/employee-directory/md.png";
import lg from "../../media/employee-directory/lg.png";
import loading from "../../media/employee-directory/loading.png";

const EmployeeDirectory = () => {
  return (
    <div className="case">
      <div className="case__header">
        <h1>Employee Directory App</h1>
        <div className="case__header__pills">
          <Pill type="react" />
          <Pill type="redux" />
          <Pill type="js" />
          <Pill type="sass" />
        </div>
        <a href="https://github.com/patrickmao93/techdegree-project-8">
          <i className="fab fa-github" />
          View on Github
        </a>
        <a href="https://patrickmao93.github.io/EmployeeDirectory-React">
          <i className="far fa-window-maximize" />
          Go to live page
        </a>
      </div>
      <div className="case__content">
        <h2>Summary</h2>
        <p className="case__content__summary">
          This was the project #8 of the{" "}
          <a href="https://teamtreehouse.com/techdegree/front-end-web-development">
            Treehouse Front End Web Development Techdegree
          </a>
          . <br />
          The purpose of this project is to help myself practicing the concept
          of utilizing the fetch API to pull data from an online API
          asynchronously. It also helped me understand <em>Promise</em>. <br />
          What this project really showed/taught me was how easily front end
          code can get messy and hard to maintain when it comes to data handling
          without a framework. I already see myself creating several global
          variables that could end up being hazardous in the future if the
          project scale grows. <br />
          After finishing this project, I re-wrote it completely with React.{" "}
          <a href="https://github.com/patrickmao93/EmployeeDirectory-React">
            Check it out
          </a>
          . <br />
          After doing a react version of this project, I took one step further
          and implemented this project again using react and redux.{" "}
          <a href="https://github.com/patrickmao93/Employee-directory-with-redux">
            Check it out
          </a>
        </p>
        <h2>Screenshots</h2>
        <Card header="Desktop" imgUrl={lg} />
        <Card header="Tablet" imgUrl={md} />
        <Card header="Loading Screen" imgUrl={loading} />
        <Card header="Mobile" imgUrl={sm} />
      </div>
    </div>
  );
};

export default EmployeeDirectory;
