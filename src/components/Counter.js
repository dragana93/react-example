import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment() {
    // this.state.count = this.state.count + 1;
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );

    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  decrement() {
    // this.state.count = this.state.count + 1;
    this.setState(
      {
        count: this.state.count - 1
      },
      () => {
        console.log("Callback value", this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment by 5</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
