const path = require('path');

const config = {
  entry: './entry.js',
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [

          { loader: 'style-loader' },
          // The css-loader interprets @import and url() like import/require() and will resolve them.
          { loader: 'css-loader'}
        ]
      }
    ]
  },
  plugins: [

  ]
};

module.exports = config;
