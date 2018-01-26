const webpack = require("webpack");

module.exports = function(config) {
  config.set({
    browsers: ["Chrome", "PhantomJS", "Firefox"],
    frameworks: ["mocha"],
    reporters: ["mocha"],
    mime: {
      "text/x-typescript": ["ts", "tsx"]
    },
    files: ["test/**.spec.ts"],
    preprocessors: {
      ["test/**.spec.ts"]: ["webpack"]
    },
    webpack: {
      devtool: "inline-source-map",
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      module: {
        // loaders: [
        //     {test: /\.(t|j)sx?$/, exclude: /node_modules/, loader: 'babel'}
        // ]
        rules: [
          {
            test: /\.(t|j)sx?$/,
            use: "awesome-typescript-loader",
            exclude: /node_modules/
          },
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("test")
        })
      ]
    },

    webpackMiddleware: {
      noInfo: true
    }
  });
};
