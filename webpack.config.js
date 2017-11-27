require('dotenv').config();
var webpack = require('webpack');
var path = require('path');

var srcPath = path.join(__dirname, '/src')
var distPath = path.join(__dirname, '/public');

const config = {
    output: {
        path: distPath,
        publicPath: '/public',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },
    context: srcPath,
    // ts: {
    //     configFileName: path.resolve(__dirname, 'tsconfig.json')
    // },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ]
};

// Development Environment
if (process.env.NODE_ENV === 'development') {
    config.entry = [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?timeout=1000&noInfo=false',
        path.join(srcPath, '/index.tsx')
    ]

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader/webpack'
        }
    );

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );

    config.watchOptions = {
        aggregateTimeout: 500,
        poll: 500
    }
}

// Production Environment
if (process.env.NODE_ENV === 'production') {
    config.entry = [
        path.join(srcPath, '/index.tsx')        
    ];

    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin()        
    )
}

module.exports = config;