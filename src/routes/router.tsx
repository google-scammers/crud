import { createBrowserRouter } from 'react-router-dom';

import { ArticleList } from 'components/ArticleList';
import Home from 'pages/Home';
import { Login } from 'pages/Login';
import Signup from 'pages/Signup';

import { getUser } from '../apis/user';
import { ArticleForm } from '../components/ArticleForm';

const authLogin = async () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    // return getUser(token)
    //   .then((res) => {
    //     console.log('getUser:', res.data);
    //     return { email: res.data.email };
    //   })
    //   .catch((error) => {
    //     if (error instanceof AxiosError) console.log('AxiosError:', error);
    //     else console.log('Not AxiosError:', error);
    //   });
    return getUser(token);
  }
  return null;
};

export const router = createBrowserRouter([
  {
    path: 'crud',
    element: <Home />,
    loader: authLogin,
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
      {
        path: 'write',
        element: <ArticleForm />,
      },
      {
        path: 'modify',
        element: <ArticleForm />,
      },
    ],
  },
]);
