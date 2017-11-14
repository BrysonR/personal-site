require('dotenv').config();
var webpack = require('webpack');
var path = require('path');


var srcPath = path.join(__dirname, '/src')
var distPath = path.join(__dirname, '/public');

console.log(process.env.NODE_ENV);

const config = {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react','env'],
                }
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
        new webpack.NamedModulesPlugin()
    ]
};

// Development Environment
if (process.env.NODE_ENV === 'development') {
    config.entry = [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?noInfo=false',
        path.join(srcPath, '/index.js')
    ]

    config.module.loaders.push(
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader/webpack'
        }
    )

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}

// Production Environment
if (process.env.NODE_ENV === 'production') {
    config.entry = [
        path.join(srcPath, '/index.js')        
    ]
}

module.exports = config;