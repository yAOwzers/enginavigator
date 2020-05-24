import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  }; //includes any data that this component needs

  //define a property
  //   styles = {
  //     fontSize: 50,
  //     fontWight: "bold",
  //   };

  //src = {} renders a dynamic image
  //className -> bootstrap documentation
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Incremenet</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
