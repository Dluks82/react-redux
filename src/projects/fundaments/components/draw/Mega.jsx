import React, { useState } from "react";
import "./Mega.css";

const Mega = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(60);
  const [quant, setQuant] = useState(6);
  const [nums, setNums] = useState(Array(quant || 6).fill(0));

  // const random = (min = 1, max = 60, quant = 6) => {
  //   let draws = [];

  //   for (let i = 0; i < quant; i++) {
  //     let num = parseInt(Math.random() * (max + 1 - min) + min);
  //     while (draws.includes(num)) {
  //       num = parseInt(Math.random() * (max + 1 - min) + min);
  //     }
  //     draws.push(num);
  //   }
  //   return draws.sort((a, b) => a - b);
  // };

  function genRandomNumber(min = 1, max = 60, array) {
    const random = parseInt(Math.random() * (max + 1 - min) + min);
    return array.includes(random) ? genRandomNumber(min, max, array) : random;
  }

  const random = (min, max, quant) => {
    console.log(typeof min, min, typeof max, max, typeof quant, quant);
    const numbers = Array(quant)
      .fill(0)
      .reduce((nums) => {
        const newNumber = genRandomNumber(min, max, nums);
        console.log(...nums, newNumber);
        return [...nums, newNumber];
      }, [])
      .sort((a, b) => a - b);
    return numbers;
  };

  const handleInputs = (e, from) => {
    let value = e.target.value;
    if (isNaN(value)) {
      console.log("Recebi um NaN");
    } else {
      value = parseInt(e.target.value);
    }

    switch (from) {
      case "min":
        if (isNaN(value)) {
          setMin("");
        } else {
          setMin(value);
          console.log(from, value);
        }

        break;
      case "max":
        if (isNaN(value)) {
          setMax("");
        } else {
          setMax(value);
          console.log(from, value);
        }
        break;
      case "quant":
        setQuant(value);
        console.log(from, value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="Mega">
      <div>
        <div>
          <label htmlFor="min">Min value:</label>
          <input
            id="min"
            placeholder="Min value"
            type="number"
            value={min}
            min={0}
            onChange={(e) => handleInputs(e, "min")}
          />
        </div>
        <div>
          <label htmlFor="max">Max value:</label>
          <input
            id="max"
            placeholder="Max value"
            type="number"
            value={max}
            min={0}
            onChange={(e) => handleInputs(e, "max")}
          />
        </div>
        <div>
          <label htmlFor="quant">Quantity Numbers:</label>
          <input
            id="quant"
            type="number"
            value={quant}
            onChange={(e) => handleInputs(e, "quant")}
          />
        </div>
      </div>
      <div>
        <button onClick={(_) => setNums(random(min, max, quant))}>Drawn</button>
      </div>
      <div>
        <h3>Numbers</h3>
        <h2>{nums.join(" - ")}</h2>
      </div>
    </div>
  );
};

export default Mega;
