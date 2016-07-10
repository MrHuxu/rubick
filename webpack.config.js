const path = require('path');

module.exports = {
  entry  : ['./index'],
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
  devtool : 'source-map'
};
