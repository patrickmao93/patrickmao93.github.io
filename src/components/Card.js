import React from "react";

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
      </div>
    </div>
  );
};

export default Card;
