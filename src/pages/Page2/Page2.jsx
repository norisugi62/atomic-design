import { Link, Outlet } from 'react-router-dom';

const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/detailA">DetailA</Link>
      <br />
      <Link to="/page2/detailB">DetailB</Link>
      <hr />
      <Outlet />
    </div>
  );
};

export default Page2;
