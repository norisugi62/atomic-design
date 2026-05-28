import { Link, Outlet } from 'react-router-dom';

const Page3 = () => {
  return (
    <div>
      <h1>Page3ページです</h1>
      <Link to="/page3/100">商品A(UrlParameter)</Link>
      <br />
      <Link to="/page3/200">商品B(UrlParameter)</Link>
      <br />
      <Link to="/page3/999">商品C(UrlParameter)</Link>
      <br />
      <Link to="/page3/300?name=hogehoge">商品D(QueryParameter)</Link>
      <Outlet />
    </div>
  );
};

export default Page3;
