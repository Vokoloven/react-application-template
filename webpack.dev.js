const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = () => {
  const devConfig = {
    mode: 'development',
    output: {
      publicPath: 'http://localhost:3000/',
      filename: '[name].js',
      clean: true
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      liveReload: true,
      historyApiFallback: true
    },
    plugins: [
      new Dotenv({
        path: './.env.local',
        safe: true
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.dev.svg'
      })
    ]
  };

  return merge(commonConfig, devConfig);
};
