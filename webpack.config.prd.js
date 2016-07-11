const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry  : ['./app/index'],
  output : {
    path     : path.join(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  resolve : {
    extensions         : ['', '.jsx', '.scss', '.js', '.json'],  // along the way, subsequent file(s) to be consumed by webpack
    modulesDirectories : [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module : {
    loaders : [
      {
        test    : /\.(js|jsx)$/,
        exclude : /node_modules/,
        loaders : ['react-hot', 'babel']
      }, {
        test    : /\.(scss|sass|css)$/,
        loaders : ['style', 'css']
      }, {
        test   : /\.(jpe?g|png|gif|svg)$/i,
        loader : 'file'
      }
    ]
  },
  devtool : 'source-map',
  plugins : [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : '"production"'
    })
  ]
};
