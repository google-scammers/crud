import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { colors } from '../constants/colors';
import { userState } from '../recoil/user';

export const Navbar = () => {
  const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 25px 20px;
    font-size: 30px;
    border-bottom: 1px ${colors.grey300} solid;

    & > ul {
      display: flex;
      padding: 0;
      font-size: 23px;

      & > li {
        display: flex;
        align-items: center;
      }
    }
  `;
  const StyledSignOut = styled.button`
    cursor: pointer;
  `;

  const res = useLoaderData() as { data: { email: string } };
  const email = res && res.data.email;

  const setUser = useSetRecoilState(userState);
  const user = useRecoilValue(userState);

  useEffect(() => {
    setUser({ email });
  }, [email]);

  const checkUser = () => {
    return email || user?.email;
  };

  const handleSignOut = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <StyledNav>
      <div>
        <Link to="">CRUD</Link>
      </div>
      <ul
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        {checkUser() ? (
          <li>
            <Link to={'write'}>글쓰기</Link>
          </li>
        ) : null}
        <li>
          {checkUser() ? (
            <StyledSignOut onClick={handleSignOut}>로그아웃</StyledSignOut>
          ) : (
            <Link to={'login'}>로그인</Link>
          )}
        </li>
      </ul>
    </StyledNav>
  );
};
