const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    port: 5000,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
};
