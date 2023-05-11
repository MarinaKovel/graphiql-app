import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, CardHeader, Button, Link } from '@material-ui/core';
import { developers } from '@/utils/const';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '40px',
  },
  buttonBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    flex: '1 1 300px',
    margin: 20,
    maxWidth: 'calc(33.33% - 40px)',
    minWidth: 300,
  },
  media: {
    height: 300,
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
}));

export const DeveloperCards: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {developers.map((developer) => (
        <Card className={classes.card} key={developer.name}>
          <CardHeader
            title={developer.name}
            subheader={developer.subheader}
            titleTypographyProps={{ align: 'center', fontSize: '15' }}
            subheaderTypographyProps={{ align: 'center' }}
            className={classes.cardHeader}
          />
          <CardMedia className={classes.media} image={developer.image} title={developer.name} />
          <CardContent className={classes.buttonBlock}>
            <Button style={{ width: 200 }} variant="outlined" color="primary">
              <Link href={developer.github} target="_blank" rel="noopener" underline="none">
                GitHub
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
