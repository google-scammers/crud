import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'signup'}>회원 가입</Link>
        </li>
        <li>
          <Link to={'login'}>로그인</Link>
        </li>
        <li>
          <Link to={''}>게시판</Link>
        </li>
      </ul>
    </nav>
  );
};
