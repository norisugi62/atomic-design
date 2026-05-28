import { BrowserRouter, Link } from 'react-router-dom';
import AppRouter from './router/AppRouter.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/page3">Page3</Link>
        <br />
        <Link to="/page4">Page4</Link>
      </div>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;

