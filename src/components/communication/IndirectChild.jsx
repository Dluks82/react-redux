import React from "react";

const IndirectChild = (props) => {
  const callBack = props.whenClick;
  const min = 30;
  const max = 70;
  const randomAge = () => {
    return parseInt(Math.random() * (max - min)) + min;
  };
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => callBack("Diogo", randomAge(), true)}>
        Send info to father
      </button>
    </div>
  );
};

export default IndirectChild;
