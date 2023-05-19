import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { AuthForm } from '../auth-form';
import { auth } from '@/server/firebase';
import { setUser } from '@/slices/user-slice';
import { useAppDispatch } from '@/hooks/redux';
import { ModalWindow } from '../modal-window';

export const SignUp: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState('error');

  const mapAuthCodeToMessage = (code: string) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return t('exist.email');
      default:
        return t('some.error');
    }
  };

  const handleSubmit = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
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
      <AuthForm title={t('signUp')} handleClick={handleSubmit} />
    </>
  );
};
