import { createBrowserRouter } from 'react-router-dom';

import { ArticleList } from 'pages/ArticleList';
import Home from 'pages/Home';
import { Signin } from 'pages/Signin';
import Signup from 'pages/Signup';

export const router = createBrowserRouter([
  {
    path: 'crud',
    element: <Home />,
    children: [
      {
        index: true,
        element: <ArticleList />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
    ],
  },
]);
