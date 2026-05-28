import { useNavigate } from 'react-router-dom';

const Page1DetailB = () => {
  const navigagte = useNavigate();
  return (
    <div>
      <h1>Page1 DetailBページです</h1>
      <button onClick={() => navigagte(-1)}>戻る</button>
    </div>
  );
};

export default Page1DetailB;
