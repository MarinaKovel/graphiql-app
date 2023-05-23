import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { getSchema } from './server/schema';
import themeReducer from '@/slices/theme-slice';
import userReducer from '@/slices/user-slice';
import currentTypeReducer from '@/slices/docs-current-type-slice';
import currentArgsReducer from '@/slices/docs-current-args-slice';
import docsHistoryReducer from '@/slices/docs-history-slice';

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  [getSchema.reducerPath]: getSchema.reducer,
  currentType: currentTypeReducer,
  currentArgs: currentArgsReducer,
  docsHistory: docsHistoryReducer,
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
