const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.jsx',
    output: {
        clean: true,
        path: path.resolve(__dirname, '../dist'),
    },
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
                // 解析 less 文件（css 也可以放这）
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
                    },
                    'css-loader', 
                    'less-loader'
                ],
            },
            {
                // 解析 ts 文件
                test: /\.([cm]?ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js(x)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                // 解析图片等资源文件
                test: /\.(png|jpg|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new WebpackBar(),
        new webpack.DefinePlugin({
        }),
    ],
}
