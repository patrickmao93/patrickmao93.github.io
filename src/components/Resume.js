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
                  <h2>Industrial Designer - LED light fixtures</h2>
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
                      <li>dasda</li>
                    </ul>
                  </div>
                </section>
                <section>
                  <h3 className="page__section__date">MAY 2015 - AUG 2015</h3>
                  <h2>Designer/Web Developer Intern</h2>
                  <div className="page__section__info">
                    <h3>
                      <span className="company">PodTrackers LLC.</span>, Sydney,
                      Australia
                    </h3>
                    <p>
                      - fweiofjw eoifjweofi <br />- jwefoiwejfo weifjwoei
                      fjwoeif jwofeijwe ofjwef
                      <br />- jwefoiwejfo weifjwoei fjwoeif jwofeijwe ofjwef
                      <br />- jwefoiwejfo weifjwoei fjwoeif jwofeijwe ofjwef
                    </p>
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
                <h1>Strength</h1>
                <section>
                  <h3>Web development</h3>
                  <ul>
                    <li>
                      Proficient at using version contorl system such as Git
                    </li>
                    <li>
                      Proficient at using workflow tools - webpack, gulp, npm,
                      grunt
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
                      Experienced in designing database schemas - MongoDB, MySQL
                    </li>
                    <li>Experienced in agile development and scrum method</li>
                    <li>
                      Experienced in doing code review and pair programming
                    </li>
                    <li>Keen understanding of UI/UX design</li>
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
