const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = () => {
  const prodConfig = {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: process.env.PUBLIC_URL ?? './',
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      clean: true
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new Dotenv({
        path: './.env.prod'
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.prod.svg',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      }),
      new MiniCssExtractPlugin()
    ],
    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()]
    }
  };

  return merge(commonConfig, prodConfig);
};
