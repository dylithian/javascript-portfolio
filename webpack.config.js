const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: __dirname + '/src/Main.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/main.css',
		})
	],
	output: {
		filename: 'js/main.js',
		path: __dirname
	}
};
