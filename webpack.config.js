var path = require('path')
var webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {  
        test: /\.(css|scss)$/,  
        loader:"style-loader!css-loader!postcss-loader!sass-loader"  
      }  
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = config