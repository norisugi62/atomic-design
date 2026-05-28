import { useParams, useLocation } from 'react-router-dom';

const products = [
  { id: 100, name: '商品A' },
  { id: 200, name: '商品B' },
  { id: 300, name: '商品D' },
];

const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>商品が見つかりません</h1>;
  }

  return (
    <div>
      <h1>Url Parameterページです</h1>
      <h2>{product.name}のページになります</h2>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは、{query.get('name')}</p>
    </div>
  );
};

export default UrlParameter;
