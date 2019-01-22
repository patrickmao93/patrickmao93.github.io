import React from "react";

const Anchor = props => {
  console.log(props.href);
  if (props.href === "" || (props.custom && props.custom.href === "")) {
    return (
      <span className={props.className} {...props.custom}>
        {props.children}
      </span>
    );
  }
  return (
    <a
      className={props.className}
      target={props.newTab !== "disabled" ? "_blank" : ""}
      rel={props.newTab !== "disabled" ? "noopener noreferrer" : ""}
      href={props.href}
      {...props.custom}
    >
      {props.children}
    </a>
  );
};

export default Anchor;
