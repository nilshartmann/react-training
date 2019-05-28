const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: __dirname + "/public/dist/",
    filename: "[name].[chunkhash:6].js",
    publicPath: "dist/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + "/public/index-with-hashes.html",
      template: "public/index-template.html"
    })
  ]
};
