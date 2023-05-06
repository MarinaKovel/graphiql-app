import { FC } from 'react';
import './footer.scss';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__team">
        <a
          className="footer__team-link"
          href="https://github.com/Satancrew"
          target="_blank"
          rel="noreferrer"
        >
          Vladimir
        </a>
        <a
          className="footer__team-link"
          href="https://github.com/MarinaKovel"
          target="_blank"
          rel="noreferrer"
        >
          Marina
        </a>
        <a
          className="footer__team-link"
          href="https://github.com/Veronchi"
          target="_blank"
          rel="noreferrer"
        >
          Veronica
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
