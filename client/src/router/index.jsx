import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home, MemberList, Cover, PaperList, Edit, Error } from '../pages/';

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
