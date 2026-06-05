import { Outlet } from 'react-router-dom';
import Header from '@atoms/layout/Header';

const HeaderOnly = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HeaderOnly;
