import { FC } from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { DeveloperCards } from '@/components/developer-cards';
import homelogo from '@/assets/images/homelogo.png';
import './home-page.scss';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  aboutDevelopers: {
    margin: '0 auto',
    justifyContent: 'center',
  },
}));

export const Home: FC = () => {
  const classes = useStyles();
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
        <Grid container alignItems="flex-end" className={classes.aboutDevelopers}>
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
