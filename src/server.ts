import * as dotEnv from 'dotenv';
import * as path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as webpack from 'webpack';
import * as webpackConfig from '../webpack.config.js';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as express from 'express';
import { HomeRoute } from './routes/Home';


export class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor () {
        this.app = express();

        this.config();

        this.routes();

        this.api();

        this.init();
    }

    public config () {
        dotEnv.config();
        
        this.app.use('/public', express.static('public'));
                
        if (process.env.NODE_ENV === 'development') {
            const compiler = webpack(webpackConfig);
            
            this.app.use(webpackDevMiddleware(compiler, {
                publicPath: webpackConfig.output.publicPath,
                hot: true
            }));
            
            this.app.use(webpackHotMiddleware(compiler, {
                reload: true
            }));
        }
    }

    public routes () {
        let router: express.Router;
        router = express.Router();

        HomeRoute.create(router);

        this.app.use(router);
    }

    public api () {

    }

    public init () {
        const listener = this.app.listen(3000, (data) => {
            const address = listener.address();
            console.log(`Server running at http://localhost:${address.port}`);                        
        });
    }
}