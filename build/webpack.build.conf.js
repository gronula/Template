const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      jpegtran: {
        progressive: true
      }
    }),
    new ImageminWebpWebpackPlugin({
      config: [{
        test: /img\/.*\.(jpe?g|png)$/i,
        options: {
          quality: 90
        }
      }],
      detailedLogs: true,
      strict: true
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
});
