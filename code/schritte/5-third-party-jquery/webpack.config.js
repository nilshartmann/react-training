const webpack = require("webpack");
module.exports = {
	entry: ["babel-polyfill", "./src/main.js"],
	output: {
		path: __dirname + "/public/dist/",
		filename: "main.js",
		publicPath: "/dist"
	},
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		jquery: "jQuery"
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
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
};
