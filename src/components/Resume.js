import React from "react";
import { Spring } from "react-spring";

import ResumeCard from "./widgets/ResumeCard";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__header">
        <h1>Patrick Mao</h1>
      </div>
      <div className="resume__scroll">
        <Spring
          from={{ opacity: 0, top: "80px" }}
          to={{ opacity: 1, top: "40px" }}
        >
          {props => (
            <div className="resume__scroll__page" style={props}>
              <section className="resume__scroll__page__work">
                <h1>Work Experience</h1>
                <section>
                  <h2>Full-stack Web Developer Intern</h2>
                  <div className="resume__scroll__page__work__info">
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
