const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8564,
    // contentBase: './public',
  },
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]bundle.js',
  },
  devtool: 'inline-source-map',
  mode: 'development',
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
