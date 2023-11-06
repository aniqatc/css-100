const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './src/scripts/load.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'main.js',
		chunkFilename: 'scripts.js',
		publicPath: '/',
		clean: true,
	},
	optimization: {
		minimize: true,
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
				test: /\.(png|jpe?g|gif|avif|webp|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[name][ext]',
				},
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							webp: {
								quality: 75,
							},
						},
					},
				],
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
