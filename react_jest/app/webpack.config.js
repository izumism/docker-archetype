const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    carousel: './src/Carousel.js',
    example: './example/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Carousel Example',
      chunks: ['example'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};
