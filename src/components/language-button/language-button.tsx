import React, { FC } from 'react';
import language from '@/assets/language.png';

export const LanguageButton: FC = () => {
  return (
    <button type="button" className="header__language">
      <img src={language} alt="change_lang" className="header__language-img" />
    </button>
  );
};