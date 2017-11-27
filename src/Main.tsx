import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, homeRouteData } from './Home/';


const Main = () => (
    <Switch>
        <Route exact path='/' component={(props) => (
            <Home {...props} routeData={homeRouteData} />
        )} />
    </Switch>
)

export default Main;
