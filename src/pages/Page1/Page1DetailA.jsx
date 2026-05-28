import { useNavigate } from 'react-router-dom';

const Page1DetailA = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page1 DetailAページです</h1>
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  );
};

export default Page1DetailA;
