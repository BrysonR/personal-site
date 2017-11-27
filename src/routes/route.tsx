import { NextFunction, Request, Response } from "express";
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Html } from '../Html';
import { homeRouteData } from '../Home';

export class BaseRoute {
    protected title: string;

    constructor () {
        this.title = `B's Site`;
    }

    public render(req: Request, res: Response, View: React.ComponentClass<any>, props: Object) {
        res.locals.BASE_URL = '/';

        res.locals.title = this.title;

        res.writeHead(200, {
            'Cache-Control': 'no-cache'
        });
        
        ReactDOMServer
            .renderToNodeStream(
                <Html initialData={props}>
                    <View routeData={props} />
                </Html>
            )
            .pipe(res);
    }
}