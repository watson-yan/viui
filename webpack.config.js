var path = require('path')
var webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js',
    library: 'viui',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
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
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = config