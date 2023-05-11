import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { getSchema } from './server/schema';
import themeReducer from '@/slices/theme-slice';

const rootReducer = combineReducers({
  themeReducer,
  [getSchema.reducerPath]: getSchema.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getSchema.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
