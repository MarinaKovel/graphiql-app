import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import './layout.scss';

export const Layout: React.FC = () => {
  return (
    <div className="root-layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
