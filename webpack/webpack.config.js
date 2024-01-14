const commonConfig = require('./webpack.common')
const decConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const monitorConfig = require('./webpack.monitor')
const { merge } = require('webpack-merge')

module.exports = () => {
    switch(process.env.NODE_ENV) {
      case 'development':
        return merge(commonConfig, decConfig);
      case 'production':
        return merge(commonConfig, prodConfig);
      case 'monitor':
        return merge(commonConfig, monitorConfig);
      default:
        throw new Error('No matching configuration was found!');
    }
}