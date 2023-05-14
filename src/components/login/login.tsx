import { FC } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../auth-form';
import { auth } from '@/server/firebase';
import { setUser } from '@/slices/user-slice';
import { useAppDispatch } from '@/hooks/redux';

export const Login: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        if (user && user.email) {
          dispatch(setUser({ id: user.uid, email: user.email, isAuth: true }));
        }
      })
      .catch((error) => {
        // TODO validation
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return <AuthForm title="sign in" handleClick={handleSubmit} />;
};
