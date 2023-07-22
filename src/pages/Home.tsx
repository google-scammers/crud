import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Navbar } from 'components/Navbar';

import { getUser } from '../apis/user';
import { userState } from '../recoil/user';

function Home() {
  const setUser = useSetRecoilState(userState);
  const user = useRecoilValue(userState);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      getUser(token)
        .then((res) => {
          console.log('getUser:', res.data);
          setUser({ email: res.data.email });
        })
        .catch((error) => {
          if (error instanceof AxiosError) console.log('AxiosError:', error);
          else console.log('Not AxiosError:', error);
        });
    }
  }, []);

  console.log('user:', user);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
