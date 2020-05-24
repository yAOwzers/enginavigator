  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //binding event handlers to this.
  //alternatively instead of inserting the constructor on top, you can use function expression 
  // = () => { }
  handleIncrement = () => {
    console.log("Increment Clicked", this); //always referencing the counter object
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Incremenet
        </button>
      </div>
    );
  }
