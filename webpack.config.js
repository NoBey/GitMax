let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'client/dist');
let APP_DIR = path.resolve(__dirname, 'client/src');

// console.log("path.resolve()", path.resolve());
// console.log("path.resolve(__dirname)", path.resolve(__dirname));
// console.log("BUILD_DIR", BUILD_DIR);

let config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;