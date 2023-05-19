import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { developers } from '@/utils/const';
import { DeveloperCard } from '../developer-card/developer-card';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '40px',
    width: '100%',
    gap: '20px',
  },
}));

export const DeveloperCards: FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DeveloperCard
        name={t('vladimir.name')}
        subtitle={t('vladimir-veronica.title')}
        image={developers.vladimir.image}
        github={developers.vladimir.github}
      />
      <DeveloperCard
        name={t('marina.name')}
        subtitle={t('marina.title')}
        image={developers.marina.image}
        github={developers.marina.github}
      />
      <DeveloperCard
        name={t('veronica.name')}
        subtitle={t('vladimir-veronica.title')}
        image={developers.veronica.image}
        github={developers.veronica.github}
      />
    </div>
  );
};
