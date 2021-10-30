import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

const IndirectFather = (props) => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);

  function providerInfo(name, age, nerd) {
    setName(name);
    setAge(age);
    setNerd(nerd);
  }
  return (
    <div>
      <div>
        <span>{name} </span>
        <span>
          <strong>{age}</strong>{" "}
        </span>
        <span>{nerd ? "True" : "False"}</span>
      </div>
      <IndirectChild whenClick={providerInfo}></IndirectChild>
    </div>
  );
};

export default IndirectFather;
