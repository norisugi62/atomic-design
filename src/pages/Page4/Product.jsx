import { useProduct } from './useProduct';

const Product = () => {
  const { item, handleOnBack, handleOnImageError } = useProduct();

  if (!item) {
    return (
      <div>
        <h2>ページが見つかりません</h2>
        <button onClick={handleOnBack}>一覧へ戻る</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} onError={handleOnImageError} />
        <p>{item.price}円</p>
        <p>{item.description}</p>
        <p>{`在庫: ${item.stock}`}</p>
      </div>

      <button onClick={handleOnBack}>一覧へ戻る</button>
    </div>
  );
};

export default Product;
