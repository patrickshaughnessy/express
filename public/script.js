import React from "react";
import ReactDOM from "react-dom";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { remainingSeconds: this.props.startingSeconds,
                   running: true };
  }
  // getInitialState() {
  //   return { remainingSeconds: this.props.startingSeconds,
  //            running: true };
  // }
  componentDidMount() {
    let delta = 1;
    this.intervalId = setInterval(() => {
      if (!this.state.running) {
        return;
      }
      if (this.state.remainingSeconds === 0 ||
          this.state.remainingSeconds === this.props.startingSeconds ) {
        delta = -1 * delta;
      }
      this.setState({ remainingSeconds: this.state.remainingSeconds + delta })
    }, 1000);
  }
  handleClick() {
    console.log("clicked", this.state);
    // clearInterval(this.intervalId);
    this.setState({running: !this.state.running});
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
  constructor(props) {
    super(props);
    this.state = { newTimerSeconds: null };
  }
  changeInput(e) {
    this.setState( { name: e.target.value } );
  }
  render() {
    return (
      <div>
        <input value={this.state.newTimerSeconds}
               placeholder="seconds"
               onChange={this.changeInput.bind(this)} />
        <button>Add Timer</button>
          <br />
          <Timer startingSeconds={42} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
