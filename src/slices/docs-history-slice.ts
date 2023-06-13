import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialType = {
  history: string[];
};

export const initialState: InitialType = {
  history: [],
};

const docsHistorySlice = createSlice({
  name: 'docsHistory',
  initialState,
  reducers: {
    setDocsHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
      return state;
    },
    clearLastHistory: (state) => {
      state.history.pop();
      state.history.pop();
      return state;
    },
  },
});

export const { setDocsHistory, clearLastHistory } = docsHistorySlice.actions;
export default docsHistorySlice.reducer;
