module.exports = {
  entry: "./public/script.js",

  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ["react", "es2015"] }
     }
    ]
  }
};
