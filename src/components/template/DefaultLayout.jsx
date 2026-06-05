import { Outlet } from 'react-router-dom';
import Header from '@atoms/layout/Header.jsx';
import Footer from '@atoms/layout/Footer.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
