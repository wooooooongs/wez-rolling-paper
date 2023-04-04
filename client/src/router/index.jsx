import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home, MemberList, Cover, PaperList, Edit, Error } from '../pages/';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/member-list',
    element: <MemberList />,
    errorElement: <Error />,
  },
  {
    path: '/:memberId',
    element: <Cover />,
    errorElement: <Error />,
  },
  {
    path: '/:memberId/paper-list',
    element: <PaperList />,
    errorElement: <Error />,
  },
  {
    path: '/:memberId/paper-list/edit',
    element: <Edit />,
    errorElement: <Error />,
  },
]);

export default Router;
