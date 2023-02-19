import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/paper-list',
    element: <PaperList />,
  },
]);

export default Router;
