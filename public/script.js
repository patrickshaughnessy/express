import React from "react";
import ReactDOM from "react-dom";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { remainingSeconds: this.props.startingSeconds };
  }
  componentDidMount() {
    let delta = 1;
    this.intervalId = setInterval(() => {
      if (this.state.remainingSeconds === 0 ||
          this.state.remainingSeconds === this.props.startingSeconds ) {
        delta = -1 * delta;
      }
      this.setState({ remainingSeconds: this.state.remainingSeconds + delta })
    }, 1000);
  }
  handleClick() {
    console.log("clicked", this.state);
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.remainingSeconds}
      </div>
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
