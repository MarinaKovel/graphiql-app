import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '@/utils/enum';
import { useAppSelector } from '@/hooks/redux';
import './auth-page.scss';

export const Auth: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isLogin = location.pathname.includes(RoutePath.LOGIN);
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (isAuth) {
      navigate(RoutePath.EDITOR, { replace: true });
    }
  }, [isAuth, navigate]);

  return (
    <section className="auth">
      <h2 className="auth__title">{isLogin ? t('auth-page.log') : t('auth-page.create')}</h2>
      <Outlet />
      <div className="auth__btns">
        {isLogin ? (
          <span>
            {t('auth-page.account')}
            <Link className="auth__variant" to={RoutePath.SIGN_UP}>
              {t('signUp')}
            </Link>
          </span>
        ) : (
          <span>
            {t('auth-page.noaccount')}
            <Link className="auth__variant" to={RoutePath.LOGIN}>
              {t('signIn')}
            </Link>
          </span>
        )}
      </div>
    </section>
  );
};
