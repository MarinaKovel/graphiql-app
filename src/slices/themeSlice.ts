import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTheme = {
  theme: 'light' | 'dark';
};

const initialState: TTheme = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<'light' | 'dark'>) {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
