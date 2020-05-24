  //when you need to pass an arguement through eventHandlers, pass an arrow function in the body of the event handler and pass an arguement
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncrement( product )}
          className="btn btn-secondary btn-sm"
        >
          Incremenet
        </button>
      </div>
    );
  }
