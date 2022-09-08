import { configureStore } from '@reduxjs/toolkit';

import { openFoodApi } from '../../services/OpenFood';

export const store = configureStore({
  reducer: {
    [openFoodApi.reducerPath]: openFoodApi.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
