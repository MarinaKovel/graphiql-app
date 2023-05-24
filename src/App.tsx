import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { FC, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { SyncLoader } from 'react-spinners';
import { Home, Auth, EditorPage, NotFound } from '@/pages';
import { Layout } from '@/components/layout';
import { Login } from '@/components/login';
import { SignUp } from '@/components/sign-up';
import { PrivateRoute } from '@/components/private-route';
import { LocalStorageKeys, RoutePath } from './utils/enum';
import { useAppSelector } from './hooks/redux';
import { override } from './utils/const';
import { customDark, customLight } from './utils/customTheme';
import { changeCssRootVariables } from './utils/change-css-root';
import { getLocalStorage } from './utils/local-storage-utils';

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
  const theme = getLocalStorage(LocalStorageKeys.THEME, 'light');
  changeCssRootVariables(theme);
  return (
    <ThemeProvider theme={isNightMode ? customDark : customLight}>
      <Suspense fallback={<SyncLoader cssOverride={override} color="#768fa3" size={25} />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
};
