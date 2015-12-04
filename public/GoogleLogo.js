var React = require("react");

var GoogleLogo = React.createClass({
  render: function() {
    return React.createElement("img",
      { className: "img-responsive", src: "https://www.google.com/images/branding" +
           "/googlelogo/2x/googlelogo_color_272x92dp.png" });
  }
});

module.exports = GoogleLogo;
