import React, { Component } from "react";

class HandleEvent extends Component {
 

  render() {
    return (
      <div>
        <h2>VALUE:{this.props.amount} </h2>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

export default HandleEvent;
