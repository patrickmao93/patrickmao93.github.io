import React from "react";
import { Spring } from "react-spring";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__header">
        <h1>Qizheng Mao (Patrick)</h1>
        <h3>Full-Stack Web Developer</h3>
        <section className="contact-section">
          <span className="contact-section__info">
            <i className="fas fa-home" />
            600 Yushan Rd., #8 room 402, Shanghai
          </span>
          <span className="contact-section__info">
            <i className="fas fa-envelope" />
            Patrickmao@live.com
          </span>
          <span className="contact-section__info">
            <i className="fas fa-phone" />
            +86 135-0185-2846
          </span>
        </section>
        <section className="intro-section">
          <p>
            Innovative, creative team player. 2 years of experience in web
            development and looking for more. Seek to secure a position of web
            development role.
          </p>
        </section>
        <section className="tech-section">
          <h2>Technologies I Use</h2>
          <div className="tech-section__icons">
            <i className="fab fa-react" />
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
                <a href="/">
                  <i className="fas fa-file-download" />
                  Download as Word Document
                </a>
              </div>
              <section className="page__section">
                <h1>Work Experience</h1>
                <section>
                  <h3 className="page__section__date">OCT 2017 - MAR 2018</h3>
                  <h2>Industrial Designer - LED light fixture designer</h2>
                  <div className="page__section__info">
                    <h3>
                      <span className="company">Suzhou Powerhouse LLC.</span>,
                      Suzhou, China
                    </h3>
                    <ul>
                      <li>
                        Generate 3D design renderings based on client's
                        concept/idea
                      </li>
                      <li>
                        Design product structure, and create 3D printed
                        prototypes
                      </li>
                      <li>Convert design into CAD drawings for production</li>
                      <li>
                        Amend existing designs for changes engineering solutions
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
                      <span className="company">Treehouse</span>
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
                    <li>Proficient with version contorl system such as Git</li>
                    <li>
                      Proficient with workflow tools - webpack, gulp, npm, grunt
                    </li>
                    <li>
                      Proficient at adopting TDD/BDD principles; adept in
                      testing tools such as Mocha
                    </li>
                    <li>
                      Adept in front-end frameworks/libraries - React, Redux,
                      Bootstrap, Materialize, and more
                    </li>
                    <li>Adept in back-end frameworks - Express, ASP.NET MVC</li>
                    <li>
                      Experience in designing database schemas - MongoDB, MySQL
                    </li>
                    <li>Experience in agile development and scrum method</li>
                    <li>
                      Experience in doing code review and pair programming
                    </li>
                    <li>Familiar with A/B testing</li>
                    <li>Keen understanding of UI/UX design</li>
                  </ul>
                </section>
                <section>
                  <h3>Design Skills</h3>
                  <ul>
                    <li>Proficient with Adobe Creative Suite - XD, AI, PS</li>
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
