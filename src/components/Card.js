import React from "react";
import { Spring, config } from "react-spring";

import Pill from "./widgets/Pill";

const renderPills = pills => {
  if (!pills) {
    return;
  }
  return pills.map(pill => <Pill key={pill} type={pill} />);
};

const Card = p => {
  let interactable = "";
  if (p.interactable) {
    interactable = "card--interactable";
  }
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 200, ...config.gentle }}
    >
      {props => {
        return (
          <div className={`card ${interactable}`} style={props}>
            <div className="card__content">
              <div className="img">
                <img src={p.imgUrl} alt={p.header} height="auto" width="auto" />
              </div>
            </div>
            <div className="card__title">
              <h2>{p.header}</h2>
              <div className="pills">{renderPills(p.pills)}</div>
            </div>
          </div>
        );
      }}
    </Spring>
  );
};

export default Card;
