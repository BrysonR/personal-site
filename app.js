import dotEnv from 'dotenv';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import { Html } from './src/Html.tsx';
import { App } from './src/App.tsx';

dotEnv.config();

const server = express();
server.use('/public', express.static('public'));

const initialData = {
    owner: 'Bryson Reynolds'
}

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);
    
    server.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true
    }));
    
    server.use(webpackHotMiddleware(compiler, {
        reload: true
    }));
}

// Root route
server.get('/', (req, res) => {
    const AppElement = React.createElement(
        App,
        {...initialData},
        null
    );

    const HtmlElement = React.createElement(
        Html,
        {initialData: JSON.stringify(initialData)},
        AppElement
    );

    ReactDOMServer
        .renderToNodeStream(HtmlElement)
        .pipe(res);
});

const listener = server.listen(3000, (data) => {
    const app = listener.address();
    console.log(`Server running at http://localhost:${app.port}`);            
});