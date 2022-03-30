const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, "./"),
    port: 8081,
    hot: true,
  },
};
