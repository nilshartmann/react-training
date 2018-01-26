module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "public/dist/main.js"
  },
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel" }]
  },
  devtool: "source-map"
};
