import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, FC } from 'react';
import { ToggleDayNight } from '../toggle-day-night/toggle-day-night';
import logo from '@/assets/logo2.png';
import { RoutePath } from '@/utils/enum';
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
        <h2 className="header__title">GraphiQL</h2>
        <img className="header__img" src={logo} alt="logo" />
      </Link>
      <nav className="header__nav">
        <div className="header__buttons">
          <Link to={RoutePath.AUTH} className="header__btn">
            Sign In
          </Link>
          <Link to={RoutePath.AUTH} className="header__btn">
            Sign Up
          </Link>
        </div>
        <div className="header__links">
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
