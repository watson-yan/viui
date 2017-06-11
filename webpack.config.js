var path = require('path')
var webpack = require('webpack')

const config = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
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