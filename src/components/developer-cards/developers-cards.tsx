import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DeveloperCardsContainer } from './developers-cards.styles';
import { developers } from '@/utils';
import { DeveloperCard } from '../developer-card/developer-card';

export const DeveloperCards: FC = () => {
  const { t } = useTranslation();
  return (
    <DeveloperCardsContainer>
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
    </DeveloperCardsContainer>
  );
};
