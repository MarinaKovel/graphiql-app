import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './footer.scss';

export const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__team">
        <a
          className="footer__team-link"
          href="https://github.com/Satancrew"
          target="_blank"
          rel="noreferrer"
        >
          {t('vladimir.name')}
        </a>
        <a
          className="footer__team-link"
          href="https://github.com/MarinaKovel"
          target="_blank"
          rel="noreferrer"
        >
          {t('marina.name')}
        </a>
        <a
          className="footer__team-link"
          href="https://github.com/Veronchi"
          target="_blank"
          rel="noreferrer"
        >
          {t('veronica.name')}
        </a>
      </div>
      <div className="footer__info">
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
          <img
            className="footer__info-logo"
            src="https://rs.school/images/rs_school_js.svg"
            alt="rs_logo"
          />
        </a>
      </div>
      <div className="footer__year">2023</div>
    </footer>
  );
};
