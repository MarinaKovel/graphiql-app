import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type User = {
  email: string;
  id: string;
};

const initialState: User = {
  email: '',
  id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    removeUser: () => {
      return initialState;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
