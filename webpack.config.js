const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[chunkhash].js',   // for production
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    // for production
    // new MiniCssExtractPlugin({
    //   filename: 'style.[chunkhash].css',
    //   disable: false,
    //   allChunks: true,
    // }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ]
};