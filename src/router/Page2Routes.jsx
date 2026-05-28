import { Route } from 'react-router-dom';
import Page2 from '@pages/Page2/Page2.jsx';
import Page2DetailA from '@pages/Page2/Page2DetailA.jsx';
import Page2DetailB from '@pages/Page2/Page2DetailB.jsx';

const BASE = '/page2';

const page2ChildRoutes = [
  { path: 'detailA', element: <Page2DetailA /> },
  { path: 'detailB', element: <Page2DetailB /> },
];

export const page2Routes = (
  <Route path={BASE} element={<Page2 />}>
    {page2ChildRoutes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Route>
);
