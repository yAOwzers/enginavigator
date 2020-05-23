import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  }; //includes any data that this component needs

  //define a property
  styles = {
    fontSize: 50,
    fontWight: "bold",
  };

  //src = {} renders a dynamic image
  //className -> bootstrap documentation
  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount}
        </span>
        <button className="btn btn-secondary btn-sm">Incremenet</button>
      </div>
    );
  }

//alternatively, the below code is valid as well
//<span style={{ fontSize: 30 }} className="badge badge-primary m-2">
