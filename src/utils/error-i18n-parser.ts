import { TFunction } from 'i18next';

export function errorI18nKeyParser(key: string | undefined, t: TFunction) {
  if (key) {
    const translation = t(key);

    if (translation === key) {
      return key;
    }
    return translation;
  }
  return '';
}
