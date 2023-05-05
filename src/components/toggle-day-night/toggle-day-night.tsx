import DayNightToggle from 'react-day-and-night-toggle';
import React, { FC, useState } from 'react';

export const ToggleDayNight: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DayNightToggle
      className="header__toggle"
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />
  );
};
