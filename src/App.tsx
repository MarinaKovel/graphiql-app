import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { Suspense } from 'react';
import { SyncLoader } from 'react-spinners';
import { Layout } from './components/layout/index';
import { Home, Auth, Editor, NotFound } from '@/pages';
import { RoutePath } from './utils/enum';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutePath.HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={RoutePath.AUTH} element={<Auth />} />
      <Route path={RoutePath.EDITOR} element={<Editor />} />
      <Route path={RoutePath.NOT_FOUND} element={<NotFound />} />
    </Route>
  )
);

export const App: React.FC = () => {
  return (
    <Suspense fallback={<SyncLoader color="#f4f750" size={25} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
