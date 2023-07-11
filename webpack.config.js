const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index",
	mode: "development",
	devServer: {
		static: path.join(__dirname, "dist"),
		port: 3002,
	},
	output: {
		publicPath: "auto",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-react"],
				},
			},
			{
				test: /\.(css)$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { sourceMap: true, importLoaders: 1, modules: false },
					},
				],
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "signup",
			filename: "remoteEntry.js",
			exposes: {
				"./App": "./src/App",
			},
			shared: { react: { singleton: true }, "react-dom": { singleton: true } },
		}),
		new ExternalTemplateRemotesPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
