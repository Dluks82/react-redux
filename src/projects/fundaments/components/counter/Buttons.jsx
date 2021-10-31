import React from "react";

const Buttons = (props) => {
  return (
    <div>
      <button onClick={(_) => props.dec(props.step)}>- {props.step}</button>
      <button onClick={(_) => props.dec(1)}>-</button>
      <button onClick={(_) => props.inc(1)}>+</button>
      <button onClick={(_) => props.inc(props.step)}>+ {props.step}</button>
    </div>
  );
};

export default Buttons;
