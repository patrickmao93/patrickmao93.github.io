import React from "react";

import Card from "./Card";

const renderImage = props => {
  if (props.imgUrl) {
    return (
      <div className="resume__card__img">
        <img src={props.imgUrl} alt={props.header} />
      </div>
    );
  }
};

const ResumeCard = props => {
  return (
    <Card>
      <div className="resume__card">
        {renderImage(props)}
        <div className="resume__card__info">
          <h1 className="resume__card__info__header">{props.header}</h1>
          <div className="resume__card__info__content">{props.children}</div>
        </div>
      </div>
    </Card>
  );
};

export default ResumeCard;
