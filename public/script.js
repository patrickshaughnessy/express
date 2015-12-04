var H1C = React.createClass({
  render: function() {
    return React.createElement("h1", { className: "green" },
      "Hello from Component");
  }
});

ReactDOM.render(React.createElement(H1C), document.getElementById('example'));
