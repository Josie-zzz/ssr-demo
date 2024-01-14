const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const SpeedWebpackPlugin = require('speed-measure-webpack-plugin')
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        // 以可视化的方式让我们直观地看到打包的bundle中到底包含哪些模块内容，以及每一个模块的体积大小。
        new BundleAnalyzerPlugin(),
        // 可以看到每个loader和plugin的耗时情况
        new SpeedWebpackPlugin(),
    ]
}