import React from "react";
import { Spring } from "react-spring";

import resumeDoc from "../QizhengMao_Font-end_Junior.docx";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__header">
        <h1>Qizheng Mao (Patrick)</h1>
        <h3>Front-end Web Developer</h3>
        <section className="resume__header__section">
          <span className="resume__header__section__info">
            <i className="fas fa-envelope" />
            patrickmao@live.com
          </span>
          <span className="resume__header__section__info">
            <i className="fab fa-weixin" />
            patrickm002
          </span>
          <span className="resume__header__section__info">
            <i className="fas fa-phone" />
            +86 135-0185-2846
          </span>
        </section>
        <section className="resume__header__section">
          <p>
            Self-driven web developer, user interface fanatic. 1 year of
            experience in web development and looking for more. Seek to secure a
            position of font-end or full-stack development role.
          </p>
        </section>
        <section className="resume__header__section">
          <h2>Technologies I'm Best At</h2>
          <div className="resume__header__section__icons">
            <i className="fab fa-react" />
            <i className="fab fa-js-square" />
            <i className="fab fa-html5" />
            <i className="fab fa-css3-alt" />
            <i className="fab fa-node-js" />
          </div>
        </section>
      </div>
      <div className="resume__scroll">
        <Spring
          from={{ opacity: 0, top: "80px" }}
          to={{ opacity: 1, top: "40px" }}
        >
          {props => (
            <div className="page" style={props}>
              <div className="page__download">
                <a href={resumeDoc} download>
                  <i className="fas fa-file-download" />
                  Download as Word Document
                </a>
              </div>
              <section className="page__section">
                <h1>Related Experience</h1>
                <section>
                  <h3 className="page__section__date">JAN 2019 - JAN 2019</h3>
                  <h2>React/Redux Kanban App</h2>
                  <div className="page__section__info">
                    <h3>
                      <span className="company">Personal Project</span>
                    </h3>
                    <ul>
                      <li>
                        Translated Trello design into my own working prototype
                      </li>
                      <li>
                        Built resuable and composable components by utilizing
                        ES6 Static method
                      </li>
                      <li>Wrote test for components using Enzyme</li>
                      <li>
                        Separated data and UI states for better controls over
                        what should be saved in client
                      </li>
                    </ul>
                  </div>
                </section>
                <section>
                  <h3 className="page__section__date">MAY 2015 - AUG 2015</h3>
                  <h2>Full-stack Web Developer Intern</h2>
                  <div className="page__section__info">
                    <h3>
                      <span className="company">Purdue CCO</span>, West
                      Lafayette, IN, USA
                    </h3>
                    <ul>
                      <li>
                        Full-stack ASP.NET MVC development focusing on C#,
                        HTML5, CSS3, jQuery, Bootstrap
                      </li>
                      <li>
                        Develop content management system as a SPA for client
                      </li>
                      <li>Write back-end APIs for data interaction</li>
                      <li>Design database schemas</li>
                      <li>Design and implement UI components</li>
                    </ul>
                  </div>
                </section>
                <section>
                  <h3 className="page__section__date">MAY 2014 - AUG 2014</h3>
                  <h2>Designer/Web Developer Intern</h2>
                  <div className="page__section__info">
                    <h3>
                      <span className="company">PodTrackers LLC.</span>, Sydney,
                      Australia
                    </h3>
                    <ul>
                      <li>
                        Design and develop tutorial for webapp (Bootstrap,
                        jQuery)
                      </li>
                      <li>Conduct secondary research and usability testing</li>
                      <li>Design marketing material</li>
                    </ul>
                  </div>
                </section>
              </section>

              <section className="page__section">
                <h1>Education</h1>
                <section>
                  <h3 className="page__section__date">OCT 2018 - JAN 2019</h3>
                  <h2>Front-End Development Techdegree</h2>
                  <div className="page__section__info">
                    <h3>
                      <span className="company">Treehouse</span>, Online Coding
                      Bootcamp
                    </h3>
                  </div>
                </section>
                <section>
                  <h3 className="page__section__date">SEP 2011 - DEC 2016</h3>
                  <h2>Bachelor of Science in Computer Graphics Technology</h2>
                  <div className="page__section__info">
                    <h3>
                      <span className="company">Purdue University</span>, West
                      Lafayette
                    </h3>
                  </div>
                </section>
              </section>

              <section className="page__section">
                <h1>Skills &amp; Strengths</h1>
                <section>
                  <h3>Development Skills</h3>
                  <ul>
                    <li>
                      Proficient with version control system such as{" "}
                      <strong>Git</strong>
                    </li>
                    <li>
                      Proficient with front-end workflow tools -{" "}
                      <strong>webpack, gulp, npm, grunt</strong>
                    </li>
                    <li>
                      Adept in front-end technologies -{" "}
                      <strong>
                        React, Redux, Bootstrap, Materialize, Sass
                      </strong>
                    </li>
                    <li>
                      Adept at working with databases and REST API -{" "}
                      <strong>MongoDB(Mongoose), MySQL</strong>
                    </li>
                    <li>
                      Adept at adopting TDD/BDD principles; adept in testing
                      tools - <strong>Mocha, Jest, Chai</strong>
                    </li>
                    <li>
                      Experience in <strong>agile</strong> development and{" "}
                      <strong>scrum</strong> method
                    </li>
                    <li>
                      Experience in doing code review and pair programming
                    </li>
                    <li>
                      Familiar with back-end frameworks -{" "}
                      <strong>Express, ASP.NET MVC</strong>
                    </li>
                    <li>Keen understanding of UI/UX design</li>
                  </ul>
                </section>
                <section>
                  <h3>Design Skills</h3>
                  <ul>
                    <li>
                      Proficient with Adobe Creative Suite -{" "}
                      <strong>XD, AI, PS</strong>
                    </li>
                    <li>Proficient at wireframing and prototyping</li>
                    <li>Experience in conducting UX researches</li>
                  </ul>
                </section>
              </section>
            </div>
          )}
        </Spring>
      </div>
    </div>
  );
};

export default Resume;
