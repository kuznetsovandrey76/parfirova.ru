const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, args) => {
  const { mode } = args;
  const API_URL = mode === 'development' ? 'http://localhost:3000/' : 'https://parfirova.herokuapp.com/';

  return {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './index.html' }),
      new MiniCssExtractPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'API_URL': JSON.stringify(API_URL),
        }
      })
    ],
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 8081,
      hot: true,
    },
  }
};
