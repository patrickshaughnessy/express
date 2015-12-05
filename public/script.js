import React from "react";
import ReactDOM from "react-dom";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { remainingSeconds: this.props.startingSeconds };
  }
  componentDidMount() {
    let delta = 1;
    let intervalId = setInterval(() => {
      if (this.state.remainingSeconds === 0 ||
          this.state.remainingSeconds === this.props.startingSeconds ) {
        delta = -1 * delta;
      }
      this.setState({ remainingSeconds: this.state.remainingSeconds + delta })
    }, 1000);
  }
  render() {
    return (
      <div>{this.state.remainingSeconds}</div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Timer startingSeconds={5} />
        <Timer startingSeconds={99} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
