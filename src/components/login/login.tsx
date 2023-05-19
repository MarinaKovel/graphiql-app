import { FC, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useTranslation } from 'react-i18next';
import { AuthForm } from '../auth-form';
import { auth } from '@/server/firebase';
import { setUser } from '@/slices/user-slice';
import { useAppDispatch } from '@/hooks/redux';
import { ModalWindow } from '../modal-window';

export const Login: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState('error');

  const mapAuthCodeToMessage = (code: string) => {
    switch (code) {
      case 'auth/user-not-found':
        return t('user.not.found');
      case 'auth/wrong-password':
        return t('wrong.pswd');
      default:
        return t('some.error');
    }
  };

  const handleSubmit = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        if (user && user.email) {
          dispatch(setUser({ id: user.uid, email: user.email, isAuth: true }));
        }
      })
      .catch((error: FirebaseError) => {
        setMessage(mapAuthCodeToMessage(error.code));
        setIsModal(true);
      });
  };

  return (
    <>
      <ModalWindow isOpen={isModal} message={message} close={setIsModal} />
      <AuthForm title={t('signIn')} handleClick={handleSubmit} />
    </>
  );
};
