import { useState, useEffect, FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { ToggleDayNight } from '../toggle-day-night/toggle-day-night';
import logo from '@/assets/icons/logo2.png';
import { RoutePath } from '@/utils/enum';
import { LanguageButton } from '../language-button';
import { UserMenu } from '../user-menu';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ModalMobile } from '../modal-mobile';
import { useAppSelector } from '@/hooks/redux';
import './header.scss';

export const Header: FC = () => {
  const { t } = useTranslation();
  const [isUpOfPage, setIsUpOfPage] = useState<boolean>(true);
  const [showTumblers, setShowTumblers] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 890px');
  const isAboveSmallScreens = useMediaQuery('(min-width: 420px');
  const { isAuth, email } = useAppSelector((state) => state.user);
  const language = localStorage.getItem('lang') || 'en';

  const closeModal = () => {
    setShowTumblers(!showTumblers);
  };

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
        {isAboveSmallScreens && <h2 className="header__title">GraphiQL</h2>}
      </Link>
      <nav className="header__nav">
        <div className="header__links">
          <NavLink className="header__link" to={RoutePath.HOME}>
            {t('home')}
          </NavLink>
          {isAuth && (
            <NavLink className="header__link" to={RoutePath.EDITOR}>
              GraphiQL
            </NavLink>
          )}
        </div>
      </nav>
      {isAboveMediumScreens ? (
        <div className="header__tumblers">
          {isAuth ? (
            <UserMenu email={email} />
          ) : (
            <>
              <Link className="header__link" to={RoutePath.LOGIN} state={{ isLogin: true }}>
                {t('signIn')}
              </Link>
              <Link className="header__link" to={RoutePath.SIGN_UP}>
                {t('signUp')}
              </Link>
            </>
          )}
          <LanguageButton />
          <span className="header__language-status">{language === 'en' ? 'EN' : 'RU'}</span>
          <ToggleDayNight />
        </div>
      ) : (
        <>
          {isAuth && <UserMenu email={email} />}
          <button type="button" onClick={closeModal} className="header__close">
            <DensityMediumIcon fontSize="large" className="header__close-img" />
          </button>
        </>
      )}
      {!isAboveMediumScreens && showTumblers && (
        <ModalMobile isAuth={isAuth} language={language} closeModal={closeModal} />
      )}
    </header>
  );
};
