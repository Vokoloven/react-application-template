const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = () => {
  const prodConfig = {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: './',
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: [
      new Dotenv({
        path: './.env',
        safe: true
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.prod.svg'
      })
    ]
  };

  return merge(commonConfig, prodConfig);
};
