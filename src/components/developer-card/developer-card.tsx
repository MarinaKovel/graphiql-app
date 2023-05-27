import { FC } from 'react';
import {
  CardWrapper,
  Media,
  CardHeaderWrapper,
  ButtonBlock,
  GithubLink,
} from './developer-card.styles';
import { CustomBtn } from '../custom-btn';

type DeveloperCardType = {
  name: string;
  subtitle: string;
  image: string;
  github: string;
};

export const DeveloperCard: FC<DeveloperCardType> = ({ name, subtitle, image, github }) => {
  return (
    <CardWrapper className="developer-card">
      <CardHeaderWrapper
        title={name}
        subheader={subtitle}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center', color: 'inherit' }}
      />
      <Media image={image} title={name} />
      <ButtonBlock>
        <CustomBtn btnType="button">
          <GithubLink href={github} target="_blank" underline="none">
            Github
          </GithubLink>
        </CustomBtn>
      </ButtonBlock>
    </CardWrapper>
  );
};
