import { FC } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../auth-form';
import { auth } from '@/server/firebase';
import { setUser } from '@/slices/user-slice';
import { useAppDispatch } from '@/hooks/redux';

export const SignUp: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
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

  return <AuthForm title="sign up" handleClick={handleSubmit} />;
};
