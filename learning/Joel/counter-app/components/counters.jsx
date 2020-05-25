import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   state = {
  //     //does not remove a counter from the array,
  //     //instead create a new array without a given counter.
  //     //Call the set state method of the component and
  //     //let React update the state

  //     counters: [
  //       { id: 1, value: 0 },s
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //     ],
  //   };

  //   handleIncrement = (counter) => {
  //     const counters = [...this.state.counters];
  //     const index = counters.indexOf(counter);
  //     counters[index] = { ...counter };
  //     counters[index].value++;
  //     this.setState({ counters });
  //   };

  //   handleReset = () => {
  //     const counters = this.state.counters.map((c) => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({ counters });
  //   };

  //   handleDelete = (counterId) => {
  //     const counters = this.state.counters.filter((c) => c.id != counterId);
  //     this.setState({ counters });
  //   };

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    //value and selected will be the property of that props object
    //our counter object contains all the relevant information of the counter
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
