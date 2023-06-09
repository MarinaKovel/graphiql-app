import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { RoutePath } from '@/utils/enum';
import { LanguageButton } from '../language-button';
import { ToggleDayNight } from '../toggle-day-night';
import './modal-mobile.scss';

type ModalMobileProps = {
  isAuth: boolean;
  language: string;
  closeModal: (event: React.MouseEvent) => void;
};

export const ModalMobile: FC<ModalMobileProps> = ({
  isAuth,
  language,
  closeModal,
}: ModalMobileProps) => {
  const { t } = useTranslation();
  return (
    <div className="modal-mobile">
      <div className="modal-mobile__button">
        <button type="button" onClick={closeModal} className="header__close">
          <CloseIcon fontSize="large" className="header__close-img" />
        </button>
      </div>
      <div className="modal-mobile__links">
        {!isAuth && (
          <>
            <Link
              className="header__link"
              to={RoutePath.LOGIN}
              onClick={closeModal}
              state={{ isLogin: true }}
            >
              {t('signIn')}
            </Link>
            <Link className="header__link" onClick={closeModal} to={RoutePath.SIGN_UP}>
              {t('signUp')}
            </Link>
          </>
        )}
        <div className="modal-mobile__toggles">
          <LanguageButton />
          <span className="header__language-status">{language === 'en' ? 'EN' : 'RU'}</span>
        </div>
        <ToggleDayNight />
      </div>
    </div>
  );
};
