import { FC, useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { SyncLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';
import { auth } from '@/server/firebase';
import { useAppDispatch } from '@/hooks/redux';
import { removeUser, setUser } from '@/slices/user-slice';
import { Header } from '../header';
import { Footer } from '../footer';
import { override } from '@/utils/const';
import './layout.scss';

export const Layout: FC = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        dispatch(setUser({ id: user.uid, email: user.email, isAuth: true }));
        setIsLoading(false);
      } else {
        dispatch(removeUser());
        setIsLoading(false);
      }
    });
  }, [dispatch]);

  if (isLoading) return <SyncLoader color="#768fa3" cssOverride={override} size={25} />;

  return (
    <div className="root-layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
