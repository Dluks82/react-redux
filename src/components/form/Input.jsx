import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [value, setValue] = useState("initial value");

  function handleInput(e) {
    setValue(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{value}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input type="text" value={value} onChange={handleInput} />
        <input type="text" value={value} readOnly />
        <input type="text" value={undefined} />
      </div>
    </div>
  );
};

export default Input;
