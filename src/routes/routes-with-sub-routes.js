import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWithSubRoutes(route) {
    const { path, exact, routes } = route;
    return (
        <Route path={path} exact={exact}>
            <route.component routes={routes} />
        </Route>
    )
}