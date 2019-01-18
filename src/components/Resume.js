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
            Innovative, creative, and loves playing in a team. I have 2 years of
            web development experience and I am looking for more. I seek to
            secure a position of any kind of web development role.
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
              <section className="page__work">
                <h1>Work Experience</h1>
                <section>
                  <h2>Full-stack Web Developer Intern</h2>
                  <div className="page__work__info">
                    <h3>
                      <span className="company">Purdue CCO</span>, West
                      Lafayette, IN, USA
                    </h3>
                    <h3>MAY 2015 - AUG 2015</h3>
                    <p>
                      - fweiofjw eoifjweofi jwefoiwejfo weifjwoei fjwoeif
                      jwofeijwe ofjwef
                      <br />- jwefoiwejfo weifjwoei fjwoeif jwofeijwe ofjwef
                      <br />- jwefoiwejfo weifjwoei fjwoeif jwofeijwe ofjwef
                      <br />- jwefoiwejfo weifjwoei fjwoeif jwofeijwe ofjwef
                    </p>
                  </div>
                </section>
                <section>
                  <h2>Full-stack Web Developer Intern</h2>
                  <div className="resume__scroll__page__work__info">
                    <h3>
                      <span className="company">Purdue CCO</span>, West
                      Lafayette, IN, USA
                    </h3>
                    <h3>MAY 2015 - AUG 2015</h3>
                    <p>
                      - fweiofjw eoifjweofi <br />- jwefoiwejfo weifjwoei
                      fjwoeif jwofeijwe ofjwef
                      <br />- jwefoiwejfo weifjwoei fjwoeif jwofeijwe ofjwef
                      <br />- jwefoiwejfo weifjwoei fjwoeif jwofeijwe ofjwef
                    </p>
                  </div>
                </section>
                <section>
                  <h2>Full-stack Web Developer Intern</h2>
                  <div className="resume__scroll__page__work__info">
                    <h3>
                      <span className="company">Purdue CCO</span>, West
                      Lafayette, IN, USA
                    </h3>
                    <h3>MAY 2015 - AUG 2015</h3>
                    <p>
                      - fweiofjw eoifjweofi <br />- jwefoiwejfo weifjwoei
                      fjwoeif jwofeijwe ofjwef
                      <br />- jwefoiwejfo weifjwoei fjwoeif jwofeijwe ofjwef
                      <br />- jwefoiwejfo weifjwoei fjwoeif jwofeijwe ofjwef
                    </p>
                  </div>
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
