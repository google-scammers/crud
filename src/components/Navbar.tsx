import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { colors } from '../constants/colors';

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

  return (
    <StyledNav>
      <div>
        <Link to="">CRUD</Link>
      </div>
      <ul>
          <li>
              <Link to={'write'}>글쓰기</Link>
          </li>
        <li>
          <Link to={'login'}>로그인</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
