import { NextFunction, Request, Response, Router } from "express";
import * as React from 'react';
import { BaseRoute } from './route';
import { Home, homeRouteData } from '../Home/';

export class HomeRoute extends BaseRoute {
    public static create (router: Router) {
        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            new HomeRoute().index(req, res, next);
        });
    }

    constructor () {
        super();
    }

    public index (req: Request, res: Response, next: NextFunction) {
        this.title = `Home | B's Sit`;
        
        this.render(req, res, Home, homeRouteData);
    }
}