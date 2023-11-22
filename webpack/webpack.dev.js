const config = require('./webpack.common')

module.exports = {
    ...config,
    mode: 'development',
    devServer: {
        port: 3009
    }
}