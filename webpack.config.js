import path from "path";
// const HtmlWebpackPlugin = require("html-webpack-plugin");
import HtmlWebpackPlugin from "html-webpack-plugin";
module.exports = {
	mode: "development",
	entry: "./src/index.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: "/node_modules",
			},
			{
				test: /\.ts$/,
				use: "ts-loader",
				// include: [path.resolve(__dirname, "./src")],
				exclude: "/node_modules",
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html",
		}),
	],
};
