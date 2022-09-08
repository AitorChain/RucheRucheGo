import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store/store';

interface searchState {
  searchQuery: string
}

const initialState: searchState = {
  searchQuery: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    }
  },
});

export const { searchProduct } = searchSlice.actions;


export default searchSlice.reducer;