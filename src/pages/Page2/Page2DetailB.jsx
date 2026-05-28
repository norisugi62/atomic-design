import { useNavigate } from 'react-router-dom';

const Page2DetailB = () => {
  const navigagte = useNavigate();
  return (
    <div>
      <h1>Page2 DetailBページです</h1>
      <button onClick={() => navigagte(-1)}>戻る</button>
    </div>
  );
};

export default Page2DetailB;
