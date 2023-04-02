import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import PaperList from '../pages/PaperList';
import MemberList from '../pages/MemberList';
import Cover from '../pages/Cover';
import Edit from '../pages/Edit';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/member-list',
    element: <MemberList />,
  },
  {
    path: '/:memberId',
    element: <Cover />,
  },
  {
    path: '/:memberId/paper-list',
    element: <PaperList />,
  },
  {
    path: '/:memberId/paper-list/edit',
    element: <Edit />,
  },
]);

export default Router;
