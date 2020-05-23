import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  }; //includes any data that this component needs

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount}</span>
        <button>Incremenet</button>
      </React.Fragment>
    );
  }

//   formatCount() {
//     const { count } = this.state; //object destructuring
//     return count === 0 ? "Zero" : count;
//   }
// }
//alternative below

  formatCount() {
    const { count } = this.state; //object destructuring
    return count === 0 ? <h1>Zero</h1> : count;
  }
}
  
export default Counter;
