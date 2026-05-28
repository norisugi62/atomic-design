import { useNavigate, useLocation } from 'react-router-dom';

const Page1DetailC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const data = state[0];
  return (
    <div>
      <h1>Page1 DetailCページです</h1>
      <p>{data}</p>
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  );
};

export default Page1DetailC;
