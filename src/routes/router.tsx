import { createBrowserRouter } from 'react-router-dom';

import Home from 'pages/Home';
import Signup from 'pages/Signup';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
    children: [
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);
