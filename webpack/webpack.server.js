const path = require('path')

module.exports = {
    // 构建目标，默认是 ‘web’，使用 node，他不会打包任何node内置模块
    target: 'node',
    mode: 'development',
    entry: path.resolve(__dirname, '../src/server/index.jsx'),
    output: {
        path: path.resolve(__dirname, '../lib'),
        // publicPath: '',
    },
    // externals: [nodeExternals()],
    // 设置模块解析
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                enforce: 'pre',
                use: 'ignore-loader',
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
}

