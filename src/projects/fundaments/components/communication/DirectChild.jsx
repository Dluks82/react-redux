import React from "react";

const directChild = (props) => {
  return (
    <div>
      <span>{props.name} </span>
      <span>
        <strong>{props.age}</strong>{" "}
      </span>
      <span>{props.nerd ? "True" : "False"}</span>
    </div>
  );
};

export default directChild;
