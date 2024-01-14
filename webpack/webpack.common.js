const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
    entry: './src/index.tsx',
    output: {
        clean: true,
        path: path.resolve(__dirname, '../output'),
    },
    module: {
        rules: [
            {
                // 解析 less 文件（css 也可以放这）
                test: /\.(le|c)ss$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 解析 ts 文件
                test: /\.([cm]?ts|tsx)$/,
                loader: 'ts-loader',
            },
            {
                // 解析图片等资源文件
                test: /\.(png|jpg|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new WebpackBar()
    ],
    resolve: {
        // 下面会覆盖默认数组，可以用['.ts', '...'] 中的'...'访问默认拓展名
        extensions: ['.tsx', '.ts', '.js']
    },
}