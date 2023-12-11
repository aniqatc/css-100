const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/scripts/load.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index.js',
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
				include: [path.resolve(__dirname, './src/styles'), path.resolve(__dirname, './entries')],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				include: [path.resolve(__dirname, './entries')],
			},
			{
				test: /\.(png|jpe?g|gif|avif|webp|svg)$/i,
				type: 'asset',
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
			favicon: './src/assets/favicon.png',
			meta: {
				description:
					'Completing the 100 Days of CSS challenge to become an expert at writing CSS. My completed daily challenges are showcased on this website.',
				keywords: '100 days of css, css, css challenge, css art"',
				author: 'Aniqa',
				'og:type': 'website',
				'og:title': '100 Days of CSS by Aniqa',
				'og:description':
					'Completing the 100 Days of CSS challenge to become an expert at writing CSS. My completed daily challenges are showcased on this website.',
				'og:url': 'https://css100.aniqa.dev',
				'og:image': 'https://css100.aniqa.dev/assets/screenshot.png',
				'twitter:title': '100 Days of CSS by Aniqa',
				'twitter:card': 'summary_large_image',
				'twitter:image': 'https://css100.aniqa.dev/assets/screenshot.png',
				'twitter:image:alt': "Screen capture of website's user interface",
				'twitter:site': '@aniqatc',
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'all.css',
		}),
		new CopyPlugin({
			patterns: [{ from: 'src/assets/screenshot.png', to: 'assets/screenshot.png' }],
		}),
	],
};
