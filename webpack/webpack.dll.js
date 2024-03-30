const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux']
    },
    mode: 'production',
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../dist/vendor'),
        library: '[name]_dll',
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_dll',
            path: path.resolve(__dirname, '../dist/vendor', '[name]-manifest.json'),
        })
    ]
}