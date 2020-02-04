import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComponent from "./MemoComponent";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dragana"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Dragana"
      });
    }, 2000);
  }

  render() {
    console.log("*** Parent Comp render ***");
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name} />
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
