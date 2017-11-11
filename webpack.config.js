var webpack = require('webpack');
var path = require('path');

var srcPath = path.join(__dirname, '/src')
var distPath = path.join(__dirname, '/public');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?noInfo=false',
        path.join(srcPath, '/index.js')
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react','env'],
                }
            }, 
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader/webpack'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: distPath,
        publicPath: '/public',
        filename: 'bundle.js'
    },
    context: srcPath,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};