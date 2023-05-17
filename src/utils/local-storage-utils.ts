import { LocalStorageKeys } from './enum';

export const getLocalStorage = (key: LocalStorageKeys, defaultValue: string): string => {
  const value = localStorage.getItem(key);
  return value || defaultValue;
};

export const setLocalStorage = <T>(key: LocalStorageKeys, value: T): void => {
  localStorage.setItem(key, String(value));
};
