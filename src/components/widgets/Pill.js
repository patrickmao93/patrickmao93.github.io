import React from "react";

const renderIcon = type => {
  switch (type) {
    case "js":
      return <i className="fab fa-js-square" />;

    case "sass":
      return <i className="fab fa-sass" />;

    case "react":
      return <i className="fab fa-react" />;

    default:
      break;
  }
};

const Pill = props => {
  return (
    <div className={`pill pill-${props.type}`}>
      {renderIcon(props.type)}
      {props.type.toUpperCase()}
    </div>
  );
};

export default Pill;
