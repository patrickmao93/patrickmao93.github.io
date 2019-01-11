import React from "react";

import Pill from "./widgets/Pill";

const renderPills = pills => {
  return pills.map(pill => <Pill key={pill} type={pill} />);
};

const Card = props => {
  return (
    <div className="card">
      <div className="card__header">
        <h2>{props.header}</h2>
      </div>
      <div className="card__content">
        <div className="img">
          <img src={props.imgUrl} alt={props.header} />
        </div>
        {renderPills(props.pills)}
      </div>
    </div>
  );
};

export default Card;
