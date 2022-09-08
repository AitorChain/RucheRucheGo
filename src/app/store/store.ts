import { configureStore } from '@reduxjs/toolkit';

import { openFoodApi } from '../../services/OpenFood';
import searchReducer from '../../features/searchSlice';

export const store = configureStore({
  reducer: {
    [openFoodApi.reducerPath]: openFoodApi.reducer,
    search: searchReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
