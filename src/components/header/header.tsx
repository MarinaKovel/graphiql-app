import { useState, useEffect, FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ToggleDayNight } from '../toggle-day-night/toggle-day-night';
import logo from '@/assets/icons/logo2.png';
import { RoutePath } from '@/utils/enum';
import { LanguageButton } from '../language-button';
import { UserMenu } from '../user-menu';
import { useAppSelector } from '@/hooks/redux';
import './header.scss';

export const Header: FC = () => {
  const [isUpOfPage, setIsUpOfPage] = useState<boolean>(true);
  const { isAuth, email } = useAppSelector((state) => state.user);

  useEffect(() => {
    const handleScroll = () => (window.scrollY === 0 ? setIsUpOfPage(true) : setIsUpOfPage(false));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarBackground = isUpOfPage ? '' : 'header__sticky';

  return (
    <header className={`header ${navbarBackground}`}>
      <Link to={RoutePath.HOME} className="header__logo">
        <img className="header__img" src={logo} alt="logo" />
        <h2 className="header__title">GraphiQL</h2>
      </Link>
      <nav className="header__nav">
        <div className="header__links">
          <NavLink className="header__link" to={RoutePath.HOME}>
            Home
          </NavLink>
          {isAuth && (
            <NavLink className="header__link" to={RoutePath.EDITOR}>
              Editor
            </NavLink>
          )}
        </div>
      </nav>

      <div className="header__tumblers">
        {isAuth ? (
          <UserMenu email={email} />
        ) : (
          <>
            <Link className="header__link" to={RoutePath.LOGIN} state={{ isLogin: true }}>
              Sign In
            </Link>

            <Link className="header__link" to={RoutePath.SIGN_UP}>
              Sign Up
            </Link>
          </>
        )}
        <LanguageButton />
        <ToggleDayNight />
      </div>
    </header>
  );
};
