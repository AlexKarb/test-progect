import { createSlice } from '@reduxjs/toolkit';
import { requestApi } from '../api';

const initialState = {
  data: [],
  error: '',
};

const slice = createSlice({
  name: 'request',
  initialState,
  extraReducers: builder => {
    builder

      .addMatcher(requestApi.endpoints.getAll.matchPending, (state, action) => {})
      .addMatcher(requestApi.endpoints.getAll.matchFulfilled, (state, action) => {
        state.data = action.payload;
        state.error = '';
      })
      .addMatcher(requestApi.endpoints.getAll.matchRejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

//SELECTOR
export const getRequest = state => state.request.data;

//REDUCER
export const requestSlice = slice.reducer;
