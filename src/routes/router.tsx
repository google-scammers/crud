import { createBrowserRouter } from 'react-router-dom';

import { ArticleList } from 'components/ArticleList';
import Home from 'pages/Home';
import { Login } from 'pages/Login';
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
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
