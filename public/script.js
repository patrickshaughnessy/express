// React App..

var React = require("react");
var ReactDOM = require("react-dom");

var GoogleLogo = require("./GoogleLogo");

var H1C = React.createClass({
  render: function() {
    return (
      <div className="green">
        Hello JSX....
        <GoogleLogo />
      </div>
    )
  }
});

ReactDOM.render(<H1C />, document.getElementById('react'));
