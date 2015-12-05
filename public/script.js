import React from "react";
import ReactDOM from "react-dom";

import ReasonsWhyWeLikeReact from "./ReasonsWhyWeLikeReact";

let pplToGreet = ["Nick", "Cade", "Joe"];

class Greet extends React.Component {
  render() {
    return (
      <div className="green">
        {this.props.greeting} {this.props.children}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>

        <Greet greeting="Hi">
          <b>Nick</b>
        </Greet>

        <Greet greeting="Howdy">
          Cade
        </Greet>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
