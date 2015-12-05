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
    this.state = { timers: [42, 9] };
  }
  addTimer(newSeconds) {
    // Push the new timer to our timers on the state.
    this.setState({
      timers: this.state.timers.concat(newSeconds)
    });
  }
  render() {
    let timersList = this.state.timers.map((timer, i) =>
      <Timer startingSeconds={timer} key={i} />
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
