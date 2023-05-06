import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import './layout.scss';

export const Layout: FC = () => {
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
