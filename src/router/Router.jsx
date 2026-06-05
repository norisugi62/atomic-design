import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@template/DefaultLayout.jsx';
import HeaderOnly from '@template/HeaderOnly.jsx';
import Top from '@pages/Top.jsx';
import Users from '@pages/User';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Top />} />
        </Route>

        <Route element={<HeaderOnly />}>
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
