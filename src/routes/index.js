import React from 'react';
import { HomePage, CoursesPage, NotFoundPage } from '../components/pages'
import { useLocation } from 'react-router-dom';
import RouteWithSubRoutes from './routes-with-sub-routes'

function Admin({ routes }) {
    const sampleLocation = useLocation();
    const { pathname } = sampleLocation

    if (pathname === '/admin') return <NotFoundPage />

    return (
        <>
            <p>Admin Page</p>
            {routes.map((route) => <RouteWithSubRoutes {...route} key={route.path} />)}
        </>
    )
}

const AdminHome = () => 'Home';

const routes = [
    { path: ['/home', '/'], component: HomePage, exact: true },
    { path: '/courses', component: CoursesPage, exact: true },
    {
        path: '/admin', component: Admin, routes: [
            { path: '/admin/home', component: AdminHome }
        ]
    },
    { path: '*', component: NotFoundPage },
];

export default routes;