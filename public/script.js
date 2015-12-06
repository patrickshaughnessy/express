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
    console.log(this.props);
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
    if (!this.state.running) {
      this.props.destroy();
    }
    this.setState({running: !this.state.running});
  }
  componentWillUnmount() {
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

Timer.propTypes = {
  startingSeconds: React.PropTypes.number.isRequired
}

// class Header extends React.Component {
//   render() {
//     return  <h2 className="header lead">
//                {this.props.title}
//             </h2>;
//   }
// }

let Header = (props) => {
  return <div className="header">
           {props.title}
         </div>;
};

import Form from "./Form";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timers: [] };
  }
  addTimer(newSeconds) {
    // Push the new timer to our timers on the state.
    this.setState({
      timers: this.state.timers.concat({ id: Date.now(), startingSeconds: newSeconds })
    });
  }
  removeTimer(timerId) {
    let currentTimers = this.state.timers;
    currentTimers = currentTimers.filter(timer => timer.id !== timerId);
    this.setState({timers: currentTimers})
  }
  render() {
    let timersList = this.state.timers.map(timer =>
      <Timer {...timer} key={timer.id}
             destroy={this.removeTimer.bind(this, timer.id)} />
    );
    return (
      <div>
        <Header title="React Rocks??" />
        <Form action={this.addTimer.bind(this)} />
        <br />
        {timersList}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
