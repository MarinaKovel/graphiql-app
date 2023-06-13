import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { RoutePath } from '@/utils/enum';
import { useAppSelector } from '@/hooks/redux';

export const PrivateRoute: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return isAuth ? <Outlet /> : <Navigate to={RoutePath.HOME} replace />;
};
