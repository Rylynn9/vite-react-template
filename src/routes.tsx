import { useRoutes, RouteObject, Navigate } from 'react-router-dom';
import Layouts from '@/layouts';
import { Home, Register, Payment } from '@/pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '/',
        element: <Navigate to="/enter/welcome" />,
      },
      {
        path: '/enter/welcome',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/payment',
        element: <Payment />,
      },
      // { path: '*', element: <NotFound /> },
    ],
  },
];

export default () => useRoutes(routes);
