import React from "react";

const StepForm = (props) => {
  return (
    <div>
      <label htmlFor="stepInput">Step:</label>
      <input
        type="number"
        value={props.value}
        onChange={(e) => props.setStep(+e.target.value)}
      />
    </div>
  );
};

export default StepForm;
