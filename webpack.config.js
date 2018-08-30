const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[chunkhash].js',   // for production
    filename: 'main.js',                 // for dev
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
    // for dev
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // for production
    // new CleanWebpackPlugin('dist', {} ),
    // new MiniCssExtractPlugin({
    //   filename: '[name].[chunkhash].css',
    //   chunkFilename: '[id].[chunkhash].css',
    //   disable: false,
    //   allChunks: true,
    // }),
    // new OptimizeCSSAssetsPlugin({
    //   cssProcessor: require('cssnano'),
    //   cssProcessorOptions: {
    //     preset: ['default', { discardComments: { removeAll: false } }],
    //     map: {inline: false},
    //     sourcemap: true,
    //   },
    // }),
  ]
};