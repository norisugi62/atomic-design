import { Route } from 'react-router-dom';
import Page3 from '@pages/Page3/Page3.jsx';
import UrlParameter from '@pages/Page3/UrlParameter.jsx';

const BASE = '/page3';

export const page3Routes = (
  <Route path={BASE} element={<Page3 />}>
    <Route path=":id" element={<UrlParameter />} />
  </Route>
);
