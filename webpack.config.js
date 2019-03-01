const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = [
{
	entry: {
		primary: './src/index.js',
		secondary: './src/secondary.js'
	},
	name: 'main',
	
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