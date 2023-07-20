import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { colors } from '../constants/colors';
import { useRecoilValue } from 'recoil';
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

  const user = useRecoilValue(userState);

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
        {user ? (
          <li>
            <Link to={'write'}>글쓰기</Link>
          </li>
        ) : null}
        {user ? null : (
          <li>
            <Link to={'login'}>로그인</Link>
          </li>
        )}
      </ul>
    </StyledNav>
  );
};
