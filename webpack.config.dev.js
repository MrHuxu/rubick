var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry : [
    'webpack-dev-server/client?http://localhost:6789', // WebpackDevServer host and port
    'webpack/hot/dev-server', // "only" prevents reload on syntax errors
    './app/index' // Your appʼs entry point
  ],

  output : {
    path       : path.join(__dirname, 'public', 'built'),
    filename   : 'bundle.js',
    publicPath : 'http://localhost:6789/assets/'
  },

  resolve : {
    extensions         : ['', '.jsx', '.scss', '.js', '.json'],  // along the way, subsequent file(s) to be consumed by webpack
    modulesDirectories : [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },

  module : {
    loaders : [{
      test    : /\.(js|jsx)$/,
      exclude : /node_modules/,
      loaders : ['react-hot', 'babel']
    }, {
      test    : /\.(scss|sass|css)$/,
      loaders : ['style', 'css']
    }, {
      test   : /\.(jpe?g|png|gif|svg)$/i,
      loader : 'file'
    }]
  },

  watchOptions : {
    poll : true
  },

  devtool : 'source-map',

  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : '"development"'
    })
  ]
};
