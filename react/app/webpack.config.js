var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name]-[hash].js',
    chunkFilename: '[id]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader",
        type: "javascript/auto",
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  devtool: "source-map",
  mode: 'production',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    index: 'index.html',
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      '0.0.0.0'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Search App',
      template: 'template/index.html',
      filename: 'index.html'
    }),
  ]
}
