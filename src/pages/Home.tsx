import { Outlet } from 'react-router-dom';

import { Navbar } from 'components/Navbar';

function Home() {
  return (
    <div>
      Home
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
