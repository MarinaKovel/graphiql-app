import { FC } from 'react';
import { Grid, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DeveloperCards } from '@/components/developer-cards';
import homelogo from '@/assets/images/homelogo.png';
import './home-page.scss';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-app">
        <div className="about-app__text">
          <h1 className="about-app__title">{t('about-app.title')}</h1>
          <p className="about-app__info">{t('about-app.info')}</p>
        </div>
        <div className="about-app__logo">
          <img src={homelogo} alt="app_logo" />
        </div>
      </section>

      <Container maxWidth="lg" component="section">
        <Grid container alignItems="flex-end">
          <DeveloperCards />
        </Grid>
      </Container>

      <section className="about-course">
        <h2 className="about-course__title">{t('about-course.title')}</h2>
        <p className="about-course__info">{t('about-course.info')}</p>
      </section>
    </>
  );
};
