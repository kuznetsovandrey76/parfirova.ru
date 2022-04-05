const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, args) => {
  const { mode } = args;
  const API_URL = mode === 'development' ? 'http://localhost:3000/' : 'https://parfirova.herokuapp.com/';

  return {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      filename: "[fullhash].[name].js",
      path: path.resolve(__dirname, 'build'),
      chunkFilename: '[id].[chunkhash].js',
      publicPath: "/"
    },
    resolve: {
      extensions: ['.js', '.json', '.css']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({ template: './index.html' }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'API_URL': JSON.stringify(API_URL),
        }
      })
    ],
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: true,
        },
      },
      historyApiFallback: true,
      compress: true,
      port: 8081,
      hot: true,
    },
    // this can be removed
    optimization: {
      minimize: true,
      minimizer: [new UglifyJsPlugin({
        include: /\.min\.js$/
      })],
      splitChunks: {
        chunks: 'all',
      },
    },
  }
};
