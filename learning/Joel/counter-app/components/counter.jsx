import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // tags: [],
  // }; //includes any data that this component needs

  //define a property
  //   styles = {
  //     fontSize: 50,
  //     fontWight: "bold",
  //   };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  //src = {} renders a dynamic image
  //className -> bootstrap documentation
  // render() {
  //   return (
  //     <div>
  //       {this.state.tags.length === 0 && "Please create a new tag!"}
  //       {this.renderTags()}
  //     </div>
  //   );
  // }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //binding event handlers to this.
  //alternatively instead of inserting the constructor on top, you can use function expression
  // = () => { }
  //In real world, we need to pass 'products' into the argument
  // handleIncrement = (product) => {
  //   // console.log("Increment Clicked", this); //always referencing the counter object
  //   this.setState({ value: this.state.value + 1 }); //updating the state, figure out what part of the state is changed, bring the DOM insync with the vitual DOM
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  
  //when you need to pass an arguement through eventHandlers, pass an arrow function in the body of the event handler and pass an arguement
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter; //object destructuring
    return count === 0 ? "Zero" : count;
  }

  //alternative below

  //   formatCount() {
  //     const { count } = this.state; //object destructuring
  //     return count === 0 ? <h1>Zero</h1> : count;
  //   }
}

export default Counter;
