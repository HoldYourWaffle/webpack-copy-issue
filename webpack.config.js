const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = [
{
	entry: './src/secondary.js',
	name: 'first',
	
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: []
},
{
	entry: './src/index.js',
	name: 'second',
	
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new CopyPlugin([
			{ from: 'src/assets', to: 'assets' },
		], { copyUnmodified: true })
	]
}
]