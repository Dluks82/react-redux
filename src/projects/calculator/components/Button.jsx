import React from "react";

import "./Button.css";

const Button = (props) => {
  let classes = "button ";
  classes += props.operation ? "operation" : "";
  classes += props.double ? "double" : "";
  classes += props.triple ? "triple" : "";
  return (
    <div>
      <button
        onClick={(e) => props.click && props.click(e.target.innerHTML)}
        className={classes}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
