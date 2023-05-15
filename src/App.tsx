import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { FC, Suspense } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { SyncLoader } from 'react-spinners';
import { Home, Auth, EditorPage, NotFound } from '@/pages';
import { Layout } from '@/components/layout';
import { Login } from '@/components/login';
import { SignUp } from '@/components/sign-up';
import { PrivateRoute } from '@/components/private-route';
import { RoutePath } from './utils/enum';
import { useAppSelector } from './hooks/redux';
import { override } from './utils/const';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutePath.HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route element={<Auth />}>
        <Route path={RoutePath.LOGIN} element={<Login />} />
        <Route path={RoutePath.SIGN_UP} element={<SignUp />} />
      </Route>
      <Route path={RoutePath.EDITOR} element={<PrivateRoute />}>
        <Route index element={<EditorPage />} />
      </Route>
      <Route path={RoutePath.NOT_FOUND} element={<NotFound />} />
    </Route>
  )
);

export const App: FC = () => {
  const { isNightMode } = useAppSelector((state) => state.theme);
  const theme = createTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<SyncLoader cssOverride={override} color="#f4f750" size={25} />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
};
