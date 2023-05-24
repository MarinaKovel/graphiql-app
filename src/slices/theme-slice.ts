import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage, LocalStorageKeys } from '@/utils';

type Theme = {
  isNightMode: boolean;
};

const localStorageTheme = localStorage && getLocalStorage(LocalStorageKeys.THEME, 'light');
const isLightTheme = localStorageTheme === 'light';

const initialState: Theme = {
  isNightMode: !isLightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleNightMode(state, action: PayloadAction<boolean>) {
      state.isNightMode = action.payload;
    },
  },
});

export const { toggleNightMode } = themeSlice.actions;
export default themeSlice.reducer;
