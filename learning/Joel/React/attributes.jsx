import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  }; //includes any data that this component needs

  //src = {} renders a dynamic image
  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount}</span>
        <button>Incremenet</button>
      </div>
    );
  }
