import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import errorLogo from '@/assets/images/404logo.png';
import { CustomBtn } from '@/components/custom-btn';
import { RoutePath } from '@/utils/enum';
import './not-found-page.scss';

export const NotFound: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="error-page">
      <img className="error-page__img" src={errorLogo} alt="error_img" />
      <h2 className="error-page__title">{t('error-page.title')}</h2>
      <h3>{t('error-page.info')}</h3>
      <p className="error-page__text">{t('error-page.text')}</p>

      <CustomBtn btnType="button">
        <Link to={RoutePath.HOME}> {t('error-page.home')}</Link>
      </CustomBtn>
    </section>
  );
};
