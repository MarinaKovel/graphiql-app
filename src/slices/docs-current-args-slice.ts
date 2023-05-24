import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Args } from '@/server/schema';

export type InitialType = {
  currentArgs: Args[] | null;
};

export const initialState: InitialType = {
  currentArgs: null,
};

const currentArgsSlice = createSlice({
  name: 'currentArgs',
  initialState,
  reducers: {
    setCurrentArgs: (state, action: PayloadAction<InitialType>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setCurrentArgs } = currentArgsSlice.actions;
export default currentArgsSlice.reducer;
