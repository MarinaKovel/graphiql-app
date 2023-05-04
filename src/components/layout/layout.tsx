import { NavLink, Outlet } from 'react-router-dom';
import { RoutePath } from '@/App';

export const Layout: React.FC = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>A</h1>
          <NavLink to={RoutePath.HOME}>Home</NavLink>
          <NavLink to={RoutePath.AUTH}>Auth</NavLink>
          <NavLink to={RoutePath.EDITOR}>Editor</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
