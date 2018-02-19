const path = require('path');

const config = {
  entry: './entry.js',
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      
    ]
  },
  plugins: [

  ]
};

module.exports = config;
