import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: 'Гість',
  role: 'GUEST', // "ADMIN", "VOLONTER", "GUEST"
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
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

//SELECTOR
export const getRoleValue = state => state.auth.role;
export const getLoginValue = state => state.auth.login;

export const { logIn, logOut } = authSlice.actions;
