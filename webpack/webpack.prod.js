const webpack = require('webpack')
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].js',
        publicPath: '',
    },
    optimization: {
        // splitChunks: {
        //     chunks: 'all',
        // },
    },
    plugins: [
        // 产生 manifest 文件
        new WebpackManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
            chunkFilename: '[contenthash].css',
        }),
        // new webpack.DllReferencePlugin({
        //     manifest: require(path.resolve(__dirname, '../dist/vendor/vendor-manifest.json')),
        // }),
    ],
}
