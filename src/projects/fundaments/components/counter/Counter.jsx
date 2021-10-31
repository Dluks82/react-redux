import React, { Component } from "react";
import Buttons from "./Buttons";
import "./Counter.css";
import Display from "./Display";
import StepForm from "./StepForm";

class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    step: 1,
  };

  inc = (step) => {
    this.setState({
      number: this.state.number + step,
    });
  };

  dec = (step) => {
    this.setState({
      number: this.state.number - step,
    });
  };

  setStep = (newStep) => {
    this.setState({
      step: newStep,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <StepForm value={this.state.step} setStep={this.setStep} />
        <Display number={this.state.number} />
        <Buttons step={this.state.step} dec={this.dec} inc={this.inc} />
      </div>
    );
  }
}

export default Counter;
