import React from "react";
import ReactDOM from "react-dom";

let Timer = React.createClass({
  getInitialState: function() {
    return { remainingSeconds: this.props.startingSeconds };
  },
  componentDidMount: function() {
    let delta = 1;
    let intervalId = setInterval(function() {
      if (this.state.remainingSeconds === 0 ||
          this.state.remainingSeconds === this.props.startingSeconds ) {
        delta = -1 * delta;
      }
      this.setState({ remainingSeconds: this.state.remainingSeconds + delta })
    }.bind(this), 1000);
  },
  render: function() {
    return (
      <div>{this.state.remainingSeconds}</div>
    );
  }
});

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
