'use strict'

const path = require('path')

module.exports = {
	entry: {
		main: './src/scripts/index.js',
		svg: './src/scripts/vendor/svg4everybody.min.js'
	},
  output: {
    filename: '[name].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/scripts')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
}
