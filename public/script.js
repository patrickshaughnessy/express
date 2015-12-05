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
  // PropType: {}
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

Timer.propTypes = {
  startingSeconds: React.PropTypes.number.isRequired
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTimerSeconds: null, timers: [42, 9] };
  }
  changeInput(e) {
    this.setState( { newTimerSeconds: e.target.value } );
  }
  addTimer(e) {
    e.preventDefault();
    // Push the new timer to our timers on the state.
    this.setState({
      timers: this.state.timers.concat(Number(this.state.newTimerSeconds)),
      newTimerSeconds: null
    });
  }
  render() {
    let timersList = this.state.timers.map((timer, i) =>
      <Timer startingSeconds={timer} key={i} />
    );
    return (
      <div>
        <form onSubmit={this.addTimer.bind(this)}>
          <input type="number"
               value={this.state.newTimerSeconds}
               placeholder="seconds"
               onChange={this.changeInput.bind(this)}
               required />
             <button type="submit">Add Timer</button>
        </form>
          <br />
          {timersList}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
