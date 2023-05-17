import DayNightToggle from 'react-day-and-night-toggle';
import { FC } from 'react';
import { changeCssRootVariables } from '@/utils/change-css-root';
import { LocalStorageKeys } from '@/utils/enum';
import { getLocalStorage, setLocalStorage } from '@/utils/local-storage-utils';
import { toggleNightMode } from '@/slices/theme-slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

export const ToggleDayNight: FC = () => {
  const { isNightMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const theme = getLocalStorage(LocalStorageKeys.THEME, 'light');
  changeCssRootVariables(theme);
  const handleToggle = () => {
    dispatch(toggleNightMode(!isNightMode));
    setLocalStorage(LocalStorageKeys.THEME, isNightMode ? 'light' : 'dark');
    if (isNightMode) {
      changeCssRootVariables('light');
    } else {
      changeCssRootVariables('dark');
    }
  };

  return (
    <DayNightToggle
      className="header__toggle"
      onChange={handleToggle}
      checked={isNightMode}
      size={34}
      speed={10}
      animationInactive={false}
      sunColor="#FFE17D"
      moonColor="#1C2238"
      sunRayColor="#FDB813"
      moonRayColor="#9FA7B3"
      starColor="#FDB813"
    />
  );
};
