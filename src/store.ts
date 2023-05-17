import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { getSchema } from './server/schema';
import themeReducer from '@/slices/theme-slice';
import userReducer from '@/slices/user-slice';
import { graphiqlAPI } from './server/graphiql-api';

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  [getSchema.reducerPath]: getSchema.reducer,
  [graphiqlAPI.reducerPath]: graphiqlAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getSchema.middleware, graphiqlAPI.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
