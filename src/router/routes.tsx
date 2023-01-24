import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import User from '../pages/user';
import Create from '../pages/user/create';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
  , {
    path: '/users',
    element: <User />
  },
  {
    path: '/users/create',
    element: <Create />
  }
]);

export default router;