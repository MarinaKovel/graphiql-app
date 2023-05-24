import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Home, Auth, EditorPage, NotFound } from '@/pages';
import { Layout } from '@/components/layout';
import { Login } from '@/components/login';
import { SignUp } from '@/components/sign-up';
import { PrivateRoute } from '@/components/private-route';
import { RoutePath } from './utils/enum';
import { useAppSelector } from './hooks/redux';
import { customDark, customLight } from './utils/customTheme';

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

  return (
    <ThemeProvider theme={isNightMode ? customDark : customLight}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
