const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new CopyPlugin([
			{ from: 'src/assets', to: 'assets' },
			{ from: 'src/static/**/*.ejs', to: 'assets' },
			{ from: 'src/direct-copy.ejs', to: 'assets' },
		], { logLevel: 'trace' })
	]
}