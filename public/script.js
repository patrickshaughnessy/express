import React from "react";
import ReactDOM from "react-dom";

import GoogleLogo from "./GoogleLogo";

import ReasonsWhyWeLikeReact from "./ReasonsWhyWeLikeReact";

class H1C extends React.Component {
  render() {
    return (
      <div className="green">
        Hello ES6+....
        <ReasonsWhyWeLikeReact />
        <GoogleLogo />
      </div>
    );
  }
}

ReactDOM.render(<H1C />, document.getElementById('react'));
