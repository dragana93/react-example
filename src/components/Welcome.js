import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        {this.props.name} {this.props.surname} hello!
      </h1>
    );
  }
}

export default Welcome;
