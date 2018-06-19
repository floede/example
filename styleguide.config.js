const path = require('path');

module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules&importLoaders=1',
					include: path.join(__dirname, 'src/styles'),
				},
			],
		},
	},
};
