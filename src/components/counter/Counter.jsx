import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    step: this.props.step || 1,
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

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <p>Value: {this.state.number}</p>
        <button onClick={(_) => this.dec(this.state.step)}>
          - {this.state.step}
        </button>
        <button onClick={(_) => this.dec(1)}>-</button>
        <button onClick={(_) => this.inc(1)}>+</button>
        <button onClick={(_) => this.inc(this.state.step)}>
          + {this.state.step}
        </button>
      </div>
    );
  }
}

export default Counter;
