import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, FC } from 'react';
import { ToggleDayNight } from '../toggle-day-night/toggle-day-night';
import logo from '@/assets/logo2.png';
import { RoutePath } from '@/App';
import { LanguageButton } from '../language-button';
import './header.scss';

export const Header: FC = () => {
  const [isUpOfPage, setIsUpOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => (window.scrollY === 0 ? setIsUpOfPage(true) : setIsUpOfPage(false));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarBackground = isUpOfPage ? '' : 'header__sticky';

  return (
    <header className={`header ${navbarBackground}`}>
      <Link to={RoutePath.HOME} className="header__logo">
        <h1 className="header__logo-title">GraphiQL</h1>
        <img className="header__logo-img" src={logo} alt="logo" />
      </Link>
      <nav className="header__nav">
        <div className="header__nav-buttons">
          <Link to={RoutePath.AUTH} className="header__nav-btn">
            Sign In
          </Link>
          <Link to={RoutePath.AUTH} className="header__nav-btn">
            Sign Up
          </Link>
        </div>
        <div className="header__nav-links">
          <NavLink to={RoutePath.HOME}>Home</NavLink>
          <NavLink to={RoutePath.AUTH}>Auth</NavLink>
          <NavLink to={RoutePath.EDITOR}>Editor</NavLink>
        </div>
      </nav>
      <div className="header__tumblers">
        <LanguageButton />
        <ToggleDayNight />
      </div>
    </header>
  );
};
