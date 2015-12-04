// React App..

var React = require("react");
var ReactDOM = require("react-dom");

var GoogleLogo = require("./GoogleLogo");

var H1C = React.createClass({
  render: function() {
    // return React.createElement("div", { className: "green" },
    //   "Hello World.....", React.createElement(GoogleLogo));
    return (
      <div className="green">
        Hello Here....
        <GoogleLogo />
      </div>
    )
  }
});

ReactDOM.render(React.createElement(H1C), document.getElementById('react'));
