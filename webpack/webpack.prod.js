const webpack = require('webpack')

module.exports = {
    mode: 'production',
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require('../dist/vendor-manifest.json'),
        }),
    ],
}
