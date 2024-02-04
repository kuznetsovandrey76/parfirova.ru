import React from 'react';

import AboutPage from './about';
import AdminPage from './admin';
import HomePage from './home';
import CoursesPage from './courses';
import NotFoundPage from './not-found';
import GalleryPage from './gallery';
import FiveGradePage from './5th-grade';
import SixGradePage from './6th-grade';
import SevenGradePage from './7th-grade';
import PostsPage from './posts';
import LessonsPage from './lessons';
import EighteenSchoolPage from './18-school';
import ThirdSchoolPage from './third-school';

const pages = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/admin', element: <AdminPage /> },
  { path: '/posts', element: <PostsPage /> },
  { path: '/lessons', element: <LessonsPage /> },
  { path: '/courses', element: <CoursesPage /> },
  { path: '/gallery', element: <GalleryPage /> },
  { path: '/5th-grade', element: <FiveGradePage /> },
  { path: '/6th-grade', element: <SixGradePage /> },
  { path: '/7th-grade', element: <SevenGradePage /> },
  { path: '/eighteen-school', element: <EighteenSchoolPage /> },
  { path: '/third-school', element: <ThirdSchoolPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default pages;
