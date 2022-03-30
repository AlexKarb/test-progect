import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: '',
  role: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.login = payload.name;
      state.role = payload.role;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.login = '';
      state.role = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
