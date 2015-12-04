// React App..

var React = require("react");
var ReactDOM = require("react-dom");;

var H1C = React.createClass({
  render: function() {
    return React.createElement("h1", { className: "green" },
      "Hello World.....");
  }
});

ReactDOM.render(React.createElement(H2C), document.getElementById('react'));
