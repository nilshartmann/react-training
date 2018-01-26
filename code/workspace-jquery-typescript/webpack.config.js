const webpack = require("webpack");
module.exports = {
	entry: ["babel-polyfill", "./src/main.tsx"],
	output: {
		path: __dirname + "/public/dist/",
		filename: "main.js",
		publicPath: "/dist"
	},
	resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		jquery: "jQuery"
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
	devtool: "inline-source-map",
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
};
