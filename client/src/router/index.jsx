import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import PaperList from '../pages/PaperList';
import MemberList from '../pages/MemberList';
import Cover from '../pages/Cover';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/paper-list',
    element: <PaperList />,
  },
  {
    path: '/member-list',
    element: <MemberList />,
  },
  {
    path: '/cover',
    element: <Cover />,
  },
]);

export default Router;
