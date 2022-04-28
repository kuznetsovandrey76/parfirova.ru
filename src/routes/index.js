import React from 'react';
import {
  AdminPage,
  HomePage,
  CoursesPage,
  NotFoundPage,
  GalleryPage,
  FiveGradePage,
  PostsPage,
  LessonsPage,
  EighteenSchoolPage,
  ThirdSchoolPage,
} from '../components/pages';
import { useLocation } from 'react-router-dom';
import RouteWithSubRoutes from './routes-with-sub-routes';

function TestPage({ routes }) {
  const sampleLocation = useLocation();
  const { pathname } = sampleLocation;

  if (pathname === '/test') return <NotFoundPage />;

  return (
    <>
      <p>Admin Page</p>
      {routes.map((route) => (
        <RouteWithSubRoutes {...route} key={route.path} />
      ))}
    </>
  );
}

const TestInner = () => 'Inner';

const routes = [
  { path: ['/home', '/'], component: HomePage, exact: true },

  { path: ['/admin'], component: AdminPage, exact: true },
  { path: '/posts', component: PostsPage, exact: true },
  { path: '/lessons', component: LessonsPage, exact: true },

  { path: '/courses', component: CoursesPage, exact: true },
  { path: '/gallery', component: GalleryPage, exact: true },
  { path: '/5th-grade', component: FiveGradePage, exact: true },
  { path: '/eighteen-school', component: EighteenSchoolPage, exact: true },
  { path: '/third-school', component: ThirdSchoolPage, exact: true },
  {
    path: '/test',
    component: TestPage,
    routes: [{ path: '/test/inner', component: TestInner }],
  },
  { path: '*', component: NotFoundPage },
];

export default routes;
