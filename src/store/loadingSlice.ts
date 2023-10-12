import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppLoadingStatus {
  viewLoaded?: boolean;
  countryDataLoaded?: boolean;
}

const initialState = {
  viewLoaded: false,
  countryDataLoaded: false
} as AppLoadingStatus;

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setViewLoaded(state, param: PayloadAction<boolean>) {
      state.viewLoaded = param.payload;
    }
  }
});

export const { setViewLoaded } = loadingSlice.actions;
export default loadingSlice.reducer;
