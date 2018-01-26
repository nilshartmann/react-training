const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/public/dist-dev/",
    filename: "main.js",
    publicPath: "dist-dev/",
    // https://github.com/webpack/webpack/issues/4861#issuecomment-304269150
    // https://webpack.js.org/configuration/output/#output-chunkfilename
    // chunkFilename: '[name]-[chunkhash].js'
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
  devtool: "inline-source-map",
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
