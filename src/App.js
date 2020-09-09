import React, { Component } from "react";

const App = () => {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCountHandler = () => {
    const currentCount = this.state.count;
    this.setState({ count: currentCount + 1 });
  };

  decrementCountHandler = () => {
    const currentCount = this.state.count;
    this.setState({ count: currentCount - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <p>counter: {this.state.count}</p>
        <button onClick={this.incrementCountHandler}>+1</button>
        <button onClick={this.decrementCountHandler}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
