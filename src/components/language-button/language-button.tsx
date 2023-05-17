import { FC } from 'react';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useTranslation } from 'react-i18next';
import { getLocalStorage, setLocalStorage } from '@/utils/local-storage-utils';
import { LocalStorageKeys } from '@/utils/enum';

export const LanguageButton: FC = () => {
  const { i18n } = useTranslation();
  const handleChangeLang = () => {
    let language = getLocalStorage(LocalStorageKeys.LANGUAGE, 'en');
    const newLanguage = language === 'en' ? 'ru' : 'en';
    setLocalStorage(LocalStorageKeys.LANGUAGE, newLanguage);
    i18n.changeLanguage(newLanguage);
    language = newLanguage;
  };
  return (
    <button type="button" onClick={handleChangeLang} className="header__language">
      <LanguageOutlinedIcon fontSize="large" className="header__language-img" />
    </button>
  );
};
