const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    devServer: {
        allowedHosts: 'all',
        port: 3009,
        proxy: [
            {
                context: ['/vod/'],
                target: 'http://10.195.44.246:8000/',
                changeOrigin: true,
            },
            {
                context: ['/api/'],
                target: 'http://localhost:4000/',
                changeOrigin: true,
            },
            {
                context: ['/biz-api/v1/workbench/'],
                // target: 'https://api.honghusaas.com/',
                // osim环境
                target: 'http://osim205.api.gs.osim.intra.honghusaas.com/',
                changeOrigin: true,
            },
        ],
    },
    devtool: 'source-map',
}
