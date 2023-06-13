import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type User = {
  email: string;
  id: string;
  isAuth: boolean;
};

const initialState: User = {
  email: '',
  id: '',
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
      return state;
    },
    removeUser: () => {
      return initialState;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
