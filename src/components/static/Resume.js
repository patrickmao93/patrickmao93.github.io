import React from "react";

import Card from "../Card";

const Resume = () => {
  return (
    <div className="resume">
      <Card>
        <div className="resume__card">
          <div className="resume__card__img">1</div>
          <div className="resume__card__info">
            <h1 className="resume__card__info__header">
              Qizheng Mao (Patrick)
            </h1>
            <div className="resume__card__info__content">
              <span>Tel: 13501852846</span>
              <span>Email: Patrickmao@live.com</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Resume;
