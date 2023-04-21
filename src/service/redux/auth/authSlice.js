import { createSlice } from '@reduxjs/toolkit';
import { usersApi } from '../api';

const initialState = {
  login: null,
  role: null, // "ADMIN", "VOLONTER"
  isLoggedIn: false,
  token: null,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      //loginUser

      .addMatcher(usersApi.endpoints.loginUser.matchPending, (state, action) => {})
      .addMatcher(usersApi.endpoints.loginUser.matchFulfilled, (state, action) => {
        state.login = action.payload.data.user.login;
        state.role = action.payload.data.user.type;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })
      .addMatcher(usersApi.endpoints.loginUser.matchRejected, (state, action) => {
        state.error = action.payload;
        state.login = null;
        state.role = null;
        state.isLoggedIn = false;
        state.token = null;
      })

      //logoutUser

      .addMatcher(usersApi.endpoints.logoutUser.matchPending, (state, action) => {})
      .addMatcher(usersApi.endpoints.logoutUser.matchFulfilled, (state, action) => {
        state.login = null;
        state.role = null;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addMatcher(usersApi.endpoints.logoutUser.matchRejected, (state, action) => {
        state.error = action.payload;
        state.login = null;
        state.role = null;
        state.isLoggedIn = false;
        state.token = null;
      })

      //getCurrent

      .addMatcher(usersApi.endpoints.getCurrentUser.matchPending, (state, action) => {})
      .addMatcher(usersApi.endpoints.getCurrentUser.matchFulfilled, (state, action) => {
        state.login = action.payload.data.user.login;
        state.role = action.payload.data.user.type;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })
      .addMatcher(usersApi.endpoints.getCurrentUser.matchRejected, (state, action) => {
        state.error = action.payload;
        state.login = null;
        state.role = null;
        state.isLoggedIn = false;
        state.token = null;
      });
  },
});

//SELECTOR
export const getRoleValue = state => state.auth.role;
export const getTokenValue = state => state.auth.token;
export const getLoginValue = state => state.auth.login;
export const getIsLoggedInValue = state => state.auth.isLoggedIn;

//REDUCER
export const authSlice = slice.reducer;
