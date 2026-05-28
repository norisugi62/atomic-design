import { Route } from 'react-router-dom';
import Page4 from '@pages/Page4/Page4.jsx';
import Product from '@pages/Page4/Product.jsx';

const BASE = '/page4';

export const page4Routes = (
  <Route path={BASE} element={<Page4 />}>
    <Route path={':id'} element={<Product />} />
  </Route>
);


