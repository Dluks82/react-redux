import React from "react";
import DirectChild from "./DirectChild";

const directFather = (props) => {
  return (
    <div>
      <DirectChild name="Diogo" age={39} nerd={false}></DirectChild>
      <DirectChild name="Ana" age={27} nerd={true}></DirectChild>
      <DirectChild name="Diana" age={13} nerd={true}></DirectChild>
    </div>
  );
};

export default directFather;
