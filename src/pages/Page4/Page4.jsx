import { Outlet, useParams } from 'react-router-dom';
import { useProducts } from './useProducts';
import { STATUS } from '@constants/index.js';
import ProductList from './ProductList';
const BASE = '/page4';

const Page4 = () => {
  const { state } = useProducts();
  const { id } = useParams();
  const { status, data, error } = state;

  if (status === STATUS.IDLE) return <p>開始前</p>;
  if (status === STATUS.LOADING) return <p>読み込み中</p>;
  if (status === STATUS.ERROR) return <p>エラー: {error}</p>;
  if (status === STATUS.TIMEOUT) return <p>通信がタイムアウトしました</p>;
  if (status === STATUS.SUCCESS && data.length === 0) return <p>表示できる商品がありません</p>;

  return (
    <div>
      <h1>Page4です</h1>
      {!id && <ProductList data={data} basePath={BASE} />}
      <Outlet context={{ data, basePath: BASE }} />
    </div>
  );
};

export default Page4;
