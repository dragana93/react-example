import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, surname } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <h1>
        {name} {surname} hello!
      </h1>
    );
  }
}

export default Welcome;
