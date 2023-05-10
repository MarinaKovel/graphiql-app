import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { DeveloperCards } from '@/components/developer-cards';
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
  return (
    <>
      <section className="about-app">
        <div className="about-app__text">
          <h1 className="about-app__title">A query language for your API</h1>
          <p className="about-app__info">
            GraphiQL is a query language for APIs and a runtime for fulfilling those queries with
            your existing data. GraphiQL provides a complete and understandable description of the
            data in your API, gives clients the power to ask for exactly what they need and nothing
            more, makes it easier to evolve APIs over time, and enables powerful developer tools.
          </p>
        </div>
        <div className="about-app__logo">
          <img src="https://classic.yarnpkg.com/assets/feature-reliable.png" alt="app_logo" />
        </div>
      </section>

      <Container maxWidth="lg" component="section">
        <Grid container alignItems="flex-end" className={classes.aboutDevelopers}>
          <DeveloperCards />
        </Grid>
      </Container>

      <section className="about-course">
        <h2 className="about-course__title">About the course</h2>
        <p className="about-course__info">
          RS School is free-of-charge and community-based education program conducted by The Rolling
          Scopes developer community since 2013. Everyone can study at RS School, regardless of age,
          professional employment, or place of residence. The mentors and trainers of our school are
          front-end and javascript developers from different companies and countries. RS School
          operates &#34;Pay it forward&#34; principle. We share our knowledge with students for free
          at the present time, hoping that in the future they will return to us as mentors and pass
          on their knowledge to the next generation of students in the same way.
        </p>
      </section>
    </>
  );
};
