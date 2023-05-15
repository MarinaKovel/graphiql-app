import { FC } from 'react';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export const LanguageButton: FC = () => {
  return (
    <button type="button" className="header__language">
      <LanguageOutlinedIcon fontSize="large" className="header__language-img" />
    </button>
  );
};
