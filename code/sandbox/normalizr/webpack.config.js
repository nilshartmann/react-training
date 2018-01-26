module.exports = {
  entry: "./src",
  output: {
    path: __dirname + "/public/dist/",
    filename: "main.js",
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: "json-loader"
      }
    ]
  },
  devtool: "inline-source-map"
};
