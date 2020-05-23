import React, { Component } from "react";

class Counter extends Component {
    state = { 
        count: 0
    }; //includes any data that this component needs

  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Incremenet</button>
      </React.Fragment>
    );
  }
}

export default Counter;
