import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { Suspense } from 'react';
import { SyncLoader } from 'react-spinners';
import { Home, Auth, EditorPage, NotFound } from '@/pages';
import { Layout } from '@/components/layout';
import { Login } from '@/components/login';
import { SignUp } from '@/components/sign-up';
import { RoutePath } from './utils/enum';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutePath.HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route element={<Auth />}>
        <Route path={RoutePath.LOGIN} element={<Login />} />
        <Route path={RoutePath.SIGN_UP} element={<SignUp />} />
      </Route>
      <Route path={RoutePath.EDITOR} element={<EditorPage />} />
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
