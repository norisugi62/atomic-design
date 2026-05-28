import Page1 from '@pages/Page1/Page1.jsx';
import Page1DetailA from '@pages/Page1/Page1DetailA.jsx';
import Page1DetailB from '@pages/Page1/Page1DetailB.jsx';
import Page1DetailC from '@pages/Page1/Page1DetailC.jsx';
import { ROUTES } from '@constants/routes.js';
const BASE = ROUTES.PAGE1;


export const page1Routes = [
  { path: `${BASE}`, element: <Page1 /> },
  { path: `${BASE}/detailA`, element: <Page1DetailA /> },
  { path: `${BASE}/detailB`, element: <Page1DetailB /> },
  { path: `${BASE}/detailC`, element: <Page1DetailC /> },
];
