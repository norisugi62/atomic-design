import { Link } from 'react-router-dom';

const ProductList = ({ data, basePath }) => {
  const productItems = data.map((product) => (
    <li key={product.id}>
      <Link to={`${basePath}/${product.id}`}>{product.name}</Link>
    </li>
  ));
  return <ul>{productItems}</ul>;
};

export default ProductList;
