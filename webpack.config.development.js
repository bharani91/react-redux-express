var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var embedFileSize = 15000

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=false',
    'bootstrap-loader',
    path.join(__dirname, 'src/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      { test: /\.svg/,
        loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'
      },
      { test: /\.png$/,
        loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'
      },
      { test: /\.jpg|.jpeg/,
        loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'
      },
      { test: /\.gif/,
        loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=' + embedFileSize
      }
    ]
  },
  _hotPort: 8001,
  postcss: [
    require('autoprefixer')
  ],
  resolve: {
    alias: {
      root: path.resolve("./src"),
      actions: path.resolve("./src/actions"),
      components: path.resolve("./src/components"),
      constants: path.resolve("./src/constants"),
      containers: path.resolve("./src/containers"),
      pages: path.resolve("./src/pages"),
      reducers: path.resolve("./src/reducers"),
      store: path.resolve("./src/store"),
      styles: path.resolve("./src/styles")
    }
  }
}
