const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        clean: true,
        path: path.resolve(__dirname, '../output'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    resolve: {
        // 下面会覆盖默认数组，可以用['.ts', '...'] 中的'...'访问默认拓展名
        extensions: ['.tsx', '.ts', '.js']
    },
}