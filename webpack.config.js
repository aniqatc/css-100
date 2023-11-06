const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	optimization: {
		splitChunks: {
			cacheGroups: {
				scripts: {
					name: 'scripts',
					test: /script\.js$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	mode: 'development',

	entry: './src/scripts/load.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'main.js',
		chunkFilename: 'scripts.js',
		publicPath: '/',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
				include: [
					path.resolve(__dirname, './src/styles'),
					path.resolve(__dirname, './entries'),
				],
			},
			{
				test: /\.(png|jpe?g|gif|avif|webp)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './assets/favicon.png',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
};
