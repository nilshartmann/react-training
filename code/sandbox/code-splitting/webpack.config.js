module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/public/dist/",
    filename: "main.js",
    publicPath: "dist/",
    // https://github.com/webpack/webpack/issues/4861#issuecomment-304269150
    // https://webpack.js.org/configuration/output/#output-chunkfilename
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  devtool: "inline-source-map"
};
