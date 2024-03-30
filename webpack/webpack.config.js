const commonConfig = require('./webpack.common')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const monitorConfig = require('./webpack.monitor')
const { merge } = require('webpack-merge')

module.exports = () => {
  console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
    switch(process.env.NODE_ENV) {
      case 'development':
        return merge(commonConfig, devConfig);
      case 'production':
        return merge(commonConfig, prodConfig);
      case 'monitor':
        return merge(commonConfig, monitorConfig);
      default:
        throw new Error('No matching configuration was found!');
    }
}