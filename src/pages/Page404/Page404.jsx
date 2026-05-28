import { Link } from 'react-router-dom';
const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりません。404</h1>
      <Link to="/">topへ</Link>
    </div>
  );
};

export default Page404;
