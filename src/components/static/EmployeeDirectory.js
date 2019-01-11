import React from "react";

const EmployeeDirectory = () => {
  return (
    <div className="case">
      <div className="case__header">
        <h1>Employee Directory App</h1>

        <a href="https://github.com/patrickmao93/techdegree-project-8">
          <i className="fab fa-github" />
          View on Github
        </a>
      </div>
      <div className="case__content">
        <p className="case__content__summary">
          This was the project #8 of the{" "}
          <a href="/">Treehouse Front End Web Development Techdegree</a>. <br />
          The purpose of this project is to help myself practicing the concept
          of utilizing the fetch API to pull data from an online API
          asynchronously. It also helped me understand <em>Promise</em>. <br />
          What this project really showed/taught me is that how easily front end
          code can get messy and hard to maintain when it comes to data handling
          without a legit framework. I already see myself creating several
          global variables that could end up being hazardous in the future if
          the project scale grows. After finishing this project, I re-wrote it
          completely with React. Please check it out Here
        </p>
        <div className="case__content__feature">
          <div className="case__content__feature__img" />
          <div className="case__content__feature__description">
            Feature description
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
