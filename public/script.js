import React from "react";
import ReactDOM from "react-dom";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { remainingSeconds: this.props.startingSeconds };
  }
  componentDidMount() {
    let intervalId = setInterval(() => {
      if (this.state.remainingSeconds === 1) {
        clearInterval(intervalId);
      }
      this.setState({ remainingSeconds: this.state.remainingSeconds - 1})
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
