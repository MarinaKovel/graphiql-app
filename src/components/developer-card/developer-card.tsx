import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, CardHeader, Link } from '@material-ui/core';
import { CustomBtn } from '../custom-btn';

type DeveloperCardType = {
  name: string;
  subtitle: string;
  image: string;
  github: string;
};

const useStyles = makeStyles((theme) => ({
  buttonBlock: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
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
  link: {
    color: 'white',
  },
}));

export const DeveloperCard: FC<DeveloperCardType> = ({ name, subtitle, image, github }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} key={name}>
      <CardHeader
        title={name}
        subheader={subtitle}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center' }}
        className={classes.cardHeader}
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent className={classes.buttonBlock}>
        <CustomBtn btnType="button">
          <Link
            href={github}
            className={classes.link}
            target="_blank"
            rel="noopener"
            underline="none"
          >
            Github
          </Link>
        </CustomBtn>
      </CardContent>
    </Card>
  );
};
