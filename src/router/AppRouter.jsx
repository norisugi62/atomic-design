import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import { page1Routes } from './Page1Routes.jsx';
import { page2Routes } from './Page2Routes.jsx';
import { page3Routes } from './Page3Routes.jsx';
import { page4Routes } from './Page4Routes.jsx';
import { page404Routes } from './Page404Routes.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {page1Routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {page2Routes}
      {page3Routes}
      {page4Routes}
      {page404Routes}
    </Routes>
  );
};

export default AppRouter;
