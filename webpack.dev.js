const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { detect } = require('detect-port');
const commonConfig = require('./webpack.common');

module.exports = async () => {
  const defaultPort = 3000;
  let port;

  try {
    port = await detect(defaultPort);
    console.log(`Requested port: ${defaultPort}, Assigned port: ${port}`);
  } catch (err) {
    console.error('Error detecting free port:', err);
    port = defaultPort + 1;
    console.log(`Falling back to port: ${port}`);
  }

  const devConfig = {
    mode: 'development',
    output: {
      publicPath: `http://localhost:${port}/`,
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
    },
    devServer: {
      port,
      open: true,
      hot: true,
      liveReload: false,
      historyApiFallback: true,
      client: {
        logging: 'info',
        overlay: true
      },
      devMiddleware: {
        stats: 'minimal'
      }
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
