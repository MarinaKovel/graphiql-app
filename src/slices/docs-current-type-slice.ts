import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SchemaFields } from '@/server/schema';
import { Docs } from '@/utils/enum';

export type InitialType = {
  title: string;
  name: string;
  description?: string;
  type?: string;
  fields?: SchemaFields[] | null;
};

export const initialState: InitialType = {
  title: Docs.ROOT_TYPES,
  name: 'Docs',
  description: '',
  type: 'Query',
  fields: [
    {
      name: 'query',
      description: '',
      args: [],
      type: { name: 'Query', kind: '', ofType: null },
      isDeprecated: false,
      deprecationReason: {},
    },
  ],
};

const currentTypeSlice = createSlice({
  name: 'currentType',
  initialState,
  reducers: {
    setCurrentType: (state, action: PayloadAction<InitialType>) => {
      state = action.payload;
      return state;
    },
    setInitialType: () => {
      return initialState;
    },
  },
});

export const { setCurrentType, setInitialType } = currentTypeSlice.actions;
export default currentTypeSlice.reducer;
