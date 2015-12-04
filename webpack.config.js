module.exports = {
  entry: "./public/script.js",

  output: {
    path: __dirname + "/public",
    filename: (function() { return "bundle.js" })()
  }
};
