import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home, MemberList, Cover, LetterList, Edit, Error } from '../pages/';

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
    path: '/:memberId/letter-list',
    element: <LetterList />,
    errorElement: <Error />,
  },
  {
    path: '/:memberId/letter-list/edit',
    element: <Edit />,
    errorElement: <Error />,
  },
]);

export default Router;
