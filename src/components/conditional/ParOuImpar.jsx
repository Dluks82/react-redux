import React from "react";

const parOuImpar = (props) => {
  const isPar = props.number % 2 === 0;
  return <div>{isPar ? <span>Par</span> : <span>Ímpar</span>}</div>;
};

export default parOuImpar;
