import { Link, useNavigate } from 'react-router-dom';

const Page1 = () => {
  const arr = [...Array(100).keys()];
  const navigate = useNavigate();
  const onClickDetailA = () => {
    navigate('/page1/detailA');
  };
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <Link to={'/page1/detailC'} state={arr}>
        DetailC
      </Link>
      <br />
      <button onClick={onClickDetailA}>DetailAへ</button>
      <hr />
    </div>
  );
};

export default Page1;
