import { Outlet } from 'react-router-dom';

import { ArticleModal } from 'components/ArticleModal';
import { Navbar } from 'components/Navbar';
import { useState } from 'react';

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <div>
      <Navbar />
      <Outlet />
      <ArticleModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
}

export default Home;
