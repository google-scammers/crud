import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { colors } from '../constants/colors';
import { userState } from '../recoil/user';

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

export const Navbar = () => {
  const res = useLoaderData() as { data: { email: string } };
  const email = res && res.data.email;

  const setUser = useSetRecoilState(userState);
  const user = useRecoilValue(userState);

  useEffect(() => {
    setUser({ email });
  }, [email]);

  const isUser = (() => email || user?.email)();

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
        {isUser ? (
          <li>
            <span style={{ color: colors.grey500 }}>{user?.email}</span>
          </li>
        ) : null}
        {isUser ? (
          <li>
            <Link to={'write'}>글쓰기</Link>
          </li>
        ) : null}
        <li>
          {isUser ? (
            <StyledSignOut onClick={handleSignOut}>로그아웃</StyledSignOut>
          ) : (
            <Link to={'login'}>로그인</Link>
          )}
        </li>
      </ul>
    </StyledNav>
  );
};
