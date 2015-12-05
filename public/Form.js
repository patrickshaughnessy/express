import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTimerSeconds: null };
  }
  changeInput(e) {
    this.setState( { newTimerSeconds: e.target.value } );
  }
  handleSubmit(e) {
    // Add a timer to the App.state.timers
    // Which we don't have access to

    // Inverse: Invoke action on the App Component
    e.preventDefault();
    this.props.action(Number(this.state.newTimerSeconds));
    this.setState({newTimerSeconds: null});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="number"
        value={this.state.newTimerSeconds}
        placeholder="seconds"
        onChange={this.changeInput.bind(this)}
        required />
      <button type="submit">Add Timer</button>
      </form>
    );
  }
}

export default Form;
