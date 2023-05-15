import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = {
  isNightMode: boolean;
};

const localStorageTheme = localStorage && localStorage.getItem('theme');
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
