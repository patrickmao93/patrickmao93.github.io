import React from "react";
import { Spring, config } from "react-spring";

import Pill from "./Pill";

const renderPills = pills => {
  if (!pills) {
    return;
  }
  return pills.map(pill => <Pill key={pill} type={pill} />);
};

const renderHeader = props => {
  if (props.header) {
    return (
      <div className="card__title">
        <h2>{props.header}</h2>
        <div className="pills">{renderPills(props.pills)}</div>
      </div>
    );
  }
};

const renderImage = props => {
  if (!props.imgUrl) {
    return;
  }
  const ribbon = props.type && (
    <div
      className={`card__content__ribbon card__content__ribbon--${props.type}`}
    >
      {props.type}
    </div>
  );
  return (
    <>
      <div className="card__content__img">
        <img src={props.imgUrl} alt={props.header} />
      </div>
      {ribbon}
    </>
  );
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
      config={{ delay: 150, ...config.gentle }}
    >
      {props => {
        return (
          <div className={`card ${interactable}`} style={props}>
            <div className="card__content">
              {renderImage(p)} {p.children}
            </div>
            {renderHeader(p)}
          </div>
        );
      }}
    </Spring>
  );
};

export default Card;
