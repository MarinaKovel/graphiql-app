import { FC, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RoutePath } from '@/utils/enum';
import { auth } from '@/server/firebase';
import './auth-page.scss';

export const Auth: FC = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(RoutePath.EDITOR, { replace: true });
    }
  }, [user, navigate]);

  return (
    <section className="auth">
      <h2 className="auth__title">
        {location.state ? 'Log in to your Account' : 'Create your Account'}
      </h2>
      <Outlet />
      <div className="auth__btns">
        {location.state?.isLogin ? (
          <span>
            Don&apos;t have an account?
            <Link className="auth__variant" to={RoutePath.SIGN_UP}>
              Sign up
            </Link>
          </span>
        ) : (
          <span>
            Already have an account?
            <Link className="auth__variant" to={RoutePath.LOGIN} state={{ isLogin: true }}>
              Sign in
            </Link>
          </span>
        )}
      </div>
    </section>
  );
};
